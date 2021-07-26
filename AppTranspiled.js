import __react__vue__Vue, { observer as __react__vue__observer } from 'vue-native-core';
import __react__vue__ReactNative from 'react-native';
import __react__vue__PropType from 'prop-types';
import { buildNativeComponent as __react__vue__buildNativeComponent } from 'vue-native-helper';
import {
  bindNativeClass as __react__vue__bindClass,
  bindNativeStyle as __react__vue__bindStyle,
  mergeNativeStyleAndNativeClass as __react__vue__mergeNativeStyleAndNativeClass,
  mergeProps as __react__vue__mergeProps,
  event as __react__vue__event,
} from 'vue-native-helper';
import { createElement as __react__vue__createElement, Component as __react__vue__Component } from 'react';

const __react__vue__options = {
  data: function () {
    return {
      text: '',
    };
  },
  methods: {
    changeX(v) {
      this.text = v;
    },
  },
};

const __react__vue__render = function render(vm) {
  return __react__vue__createElement(
    vm.$options.components['View'],
    __react__vue__mergeProps.call(this, this.props.__react__vue__nativeEvents, {
      ref: (ref) => {
        this.setRootRef(ref);
        this.props['__react__vue__setRef'] && this.props['__react__vue__setRef'](ref);
      },
      style: __react__vue__mergeNativeStyleAndNativeClass(
        __react__vue__bindClass.call(this, {
          staticClass: 'container',
          parentClass: this.props.style,
        }),
        __react__vue__bindStyle(undefined, undefined, undefined)
      ),
    }),
    __react__vue__createElement(vm.$options.components['TextInput'], {
      value: vm['text'],
      onChange: (value) => (vm['text'] = value.nativeEvent.text),
      style: __react__vue__mergeNativeStyleAndNativeClass(
        undefined,
        __react__vue__bindStyle(
          {
            height: 40,
            width: 100,
            borderColor: 'gray',
            borderWidth: 1,
          },
          undefined,
          undefined
        )
      ),
      __react__vue__customEventmodel: __react__vue__event(
        function ($event) {
          vm['text'].apply(this, arguments);
        }.bind(this)
      ),
    })
  );
};

const __react__vue__css = {
  container: { backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', flex: 1 },
  'text-color-primary': { color: 'blue' },
};

const __react__vue__ComponentBuilded = __react__vue__buildNativeComponent(__react__vue__render, __react__vue__options, {
  Component: __react__vue__Component,
  PropTypes: __react__vue__PropType,
  Vue: __react__vue__Vue,
  ReactNative: __react__vue__ReactNative,
  css: __react__vue__css,
});

export default __react__vue__observer(__react__vue__ComponentBuilded);
