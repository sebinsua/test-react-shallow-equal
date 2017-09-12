import zip from './zip'
import shallowEqual from './shallowEqual'

const DEFAULT_EMPTY_OBJECT = {}

const toChildrenArray = shallowRender => {
  const children = shallowRender.children()
  const length = children.length
  const indexes = Array.apply(null, { length }).map(Number.call, Number)
  const childrenArray = indexes.map(index => shallowRender.childAt(index))

  return childrenArray
}

const getPropsWithChildren = shallowRender => {
  return shallowRender.props() || DEFAULT_EMPTY_OBJECT
}

const getPropsWithoutChildren = shallowRender => {
  const props = Object.assign({}, shallowRender.props() || DEFAULT_EMPTY_OBJECT)
  delete props.children
  return props
}

const shallowEqualWithChildren = (firstRender, secondRender) => {
  return shallowEqual(
    getPropsWithChildren(firstRender),
    getPropsWithChildren(secondRender)
  )
}

const shallowEqualWithoutChildren = (firstRender, secondRender) => {
  return shallowEqual(
    getPropsWithoutChildren(firstRender),
    getPropsWithoutChildren(secondRender)
  )
}

const ensureInternalPropsAreShallowEqual = (
  firstRender,
  secondRender,
  selectorLevel = ''
) => {
  selectorLevel = selectorLevel || firstRender.name()

  let errors = []

  if (firstRender.name() !== secondRender.name()) {
    errors.push({
      type: 'structure',
      error: new Error(
        `Expected the component ${firstRender.name()} but found the component ${secondRender.name()} (within ${selectorLevel})`
      )
    })
  }
  if (firstRender.children().length !== secondRender.children().length) {
    errors.push({
      type: 'structure',
      error: new Error(
        `A re-render of the component ${firstRender.name()} altered its amount of children (within ${selectorLevel})`
      )
    })
  }

  const isShallowEqualWithChildren = shallowEqualWithChildren(
    firstRender,
    secondRender
  )
  const isShallowEqualWithoutChildren = shallowEqualWithoutChildren(
    firstRender,
    secondRender
  )
  if (!isShallowEqualWithChildren) {
    errors.push({
      type: isShallowEqualWithoutChildren ? 'receiving-children' : 'props',
      error: new Error(
        `The props of ${firstRender.name()} are not shallow equal on a re-render (within ${selectorLevel})` +
          (isShallowEqualWithoutChildren ? ' due to it receiving children' : '')
      )
    })
  }

  const zippedChildren = zip(
    toChildrenArray(firstRender),
    toChildrenArray(secondRender)
  )

  for (const [firstRenderChild, secondRenderChild] of zippedChildren) {
    if (firstRenderChild.name() !== secondRenderChild.name()) {
      errors.push({
        type: 'structure',
        error: new Error(
          `Expected the component ${firstRenderChild.name()} but found the component ${secondRenderChild.name()} (within ${selectorLevel})`
        )
      })
    }
    if (
      firstRenderChild.children().length !== secondRenderChild.children().length
    ) {
      errors.push({
        type: 'structure',
        error: new Error(
          `A re-render of the component ${firstRenderChild.name()} altered its amount of children (within ${selectorLevel})`
        )
      })
    }

    if (
      firstRenderChild.children().length > 0 &&
      secondRenderChild.children().length > 0
    ) {
      const childrenErrors = ensureInternalPropsAreShallowEqual(
        firstRenderChild,
        secondRenderChild,
        `${selectorLevel} > ${firstRenderChild.name()}`
      )
      errors = [].concat(errors, childrenErrors)
    } else {
      const isShallowEqualWithChildren = shallowEqualWithChildren(
        firstRenderChild,
        secondRenderChild
      )
      const isShallowEqualWithoutChildren = shallowEqualWithoutChildren(
        firstRenderChild,
        secondRenderChild
      )
      if (!isShallowEqualWithChildren) {
        errors.push({
          type: isShallowEqualWithoutChildren ? 'receiving-children' : 'props',
          error: new Error(
            `The props of ${firstRenderChild.name()} are not shallow equal on a re-render (within ${selectorLevel})` +
              (isShallowEqualWithoutChildren
                ? ' due to it receiving children'
                : '')
          )
        })
      }
    }
  }

  return errors
}

export default ensureInternalPropsAreShallowEqual
