<template>
  <div>
    <h1>them</h1>
    <section class="exam">
      <div>
        <Button>默认</Button>
        <Button them="button">button</Button>
        <Button them="link">link</Button>
        <Button them="text">text</Button>
      </div>
    </section>

    <h1>size</h1>
    <section class="exam">
      <div>
        <Button size="big">big</Button>
        <Button>big</Button>
        <Button size="small">big</Button>
      </div>
      <div>
        <Button size="big" them="link">link</Button>
        <Button them="link">link</Button>
        <Button size="small" them="link">link</Button>
      </div>
      <div>
        <Button size="big" them="text">text</Button>
        <Button them="text">text</Button>
        <Button size="small" them="text">text</Button>
      </div>
    </section>

    <h1>leval</h1>
    <section class="exam">
      <div>
        <Button leval="main" size="big">button</Button>
        <Button size="big">button</Button>
        <Button leval="danger" size="big">button</Button>
      </div>
    </section>
    <section class="exam">
      <div>
        <Button leval="main">button</Button>
        <Button>button</Button>
        <Button leval="danger">button</Button>
      </div>
    </section>
    <section class="exam">
      <div>
        <Button leval="main" size="small">button</Button>
        <Button size="small">button</Button>
        <Button leval="danger" size="small">button</Button>
      </div>
    </section>
    <section class="exam">
      <Button them="text" leval="main" size="big">button11</Button>
      <Button them="text" size="big">button</Button>
      <Button them="text" leval="danger" size="big">button</Button>
    </section>
    <section class="exam">
      <Button them="text" leval="main">button</Button>
      <Button them="text">button</Button>
      <Button them="text" leval="danger">button</Button>
    </section>
    <section class="exam">
      <Button them="text" leval="main" size="small">button</Button>
      <Button them="text" size="small">button</Button>
      <Button them="text" leval="danger" size="small">button</Button>
    </section>

    <section class="exam">
      <Button them="link" leval="main" size="big">button</Button>
      <Button them="link" size="big">button</Button>
      <Button them="link" leval="danger" size="big">button</Button>
    </section>
    <section class="exam">
      <Button them="link" leval="main">button</Button>
      <Button them="link">button</Button>
      <Button them="link" leval="danger">button</Button>
    </section>
    <section class="exam">
      <Button them="link" leval="main" size="small">button</Button>
      <Button them="link" size="small">button</Button>
      <Button them="link" leval="danger" size="small">button</Button>
    </section>
    <h1>disabled</h1>
    <section class="exam">
      <Button disabled>button</Button>
      <Button disabled them="link">button</Button>
      <Button disabled them="text">button</Button>
    </section>
    <h1>loading</h1>
    <section class="exam">
      <Button :loading="true">加载中</Button>
      <Button>加载完毕</Button>
    </section>
  </div>
</template>
<script>
import Button from "../lib/Button.vue";
export default {
  components: {
    Button: Button,
  },
  setup(props, context) {},
};
</script>
<style lang="scss" scope>
.exam {
  margin: 30px 0;
}
</style>