import { pushScopeId, popScopeId, openBlock, createBlock, Fragment, withScopeId, createVNode } from 'vue';

var script = {
  name: "FooTest"
};

const _withId = /*#__PURE__*/withScopeId("data-v-28ea8494");

pushScopeId("data-v-28ea8494");
const _hoisted_1 = /*#__PURE__*/createVNode("div", null, "root 1", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/createVNode("div", null, "root 2", -1 /* HOISTED */);
popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2
  ], 64 /* STABLE_FRAGMENT */))
});

script.render = render;
script.__scopeId = "data-v-28ea8494";
script.__file = "src/FooVueComponent.vue";

export default script;
