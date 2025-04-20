<template>
  <div class="intro">
    <span class="cn"
      >Welcome to visit my homepage! Currently, I am a master's student majoring
      in artificial intelligence at
      <a
        href="https://zjuidg.org/"
        target="_blank"
        rel="noopener noreferrer"
        class="highlight-blue link-text"
        >ZJUIDG</a
      >
      of
      <a class="highlight-black">Zhejiang University</a>, supervised by
      <a
        href="https://dwe.ng/"
        target="_blank"
        rel="noopener noreferrer"
        class="highlight-blue link-text"
        >Prof.Di Weng</a
      >. I obtained my bachelor's degree in Computer Science and Technology from
      <a class="highlight-black">Ocean University of China</a>
      in 2024. My research aims to
      <span class="highlight-orange">visualization and visual analytics</span
      >.</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "IntroductionComponent",
});
</script>

<style scoped>
.intro {
  width: 71%;
  margin: 0 auto; /* 保持水平居中 */
  text-align: left; /* 可选：如果想让内容也居中 */
}

.cn {
  font-family: "NotoSerifSC";
  font-size: 1.8vh; /* 缩小到英文字体的85% */
  font-weight: 400; /* regular字重 */
  line-height: 1.8; /* 添加行高，设置为字体大小的1.8倍 */
}

.highlight-blue {
  color: #2171b5;
  font-weight: 800;
}

.highlight-black {
  color: #000000;
  font-weight: 800;
}

.highlight-orange {
  color: #f16913;
  font-weight: 800;
}

.link-text {
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.link-text:hover {
  opacity: 0.8;
}
</style>
