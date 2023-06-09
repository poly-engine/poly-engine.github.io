---
layout: home
title: PolyEngine
titleTemplate: 下一时代 Web3D 引擎

hero:
  name: PolyEngine
  image:
    light: /images/logo_black.png
    dark: /images/logo_white.png
  text: 下一时代 Web3D 引擎
  tagline: 简单易用，功能强大，为 Web3D 提供完善开发工具
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: GitHub
      link: https://github.com/poly-engine/poly-engine

features:
  - title: 简单易用
    details: 极其简单的数据驱动开发，易用的 JavaScript & TypeScript API，免费，永久开源！
  - title: 灵活扩展
    details: 可扩展的ECS框架，可以简单做为一个库使用，也可以通过完善的组件库自如伸缩至一套完整框架
  - title: 超强性能
    details: 
      原生 Web 跨平台运行环境，超快的 WebGL / WebGPU 渲染技术，最省心的优化体验
---

<div class="heroDemos">
  <div class="container">
    <Demo src="/examples/test.js" :code="false" :height="450"></Demo>
    <Demo src="/examples/pbr2.ts" :code="false" :height="450"></Demo>
  </div>
</div>
<Logo :homeHero="true"></Logo>
