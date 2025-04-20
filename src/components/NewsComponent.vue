<template>
  <div class="news-container">
    <div class="news-title">News</div>
    <div class="news-content">
      <div class="news-item">
        <div class="news-item-time">2024.09</div>
        <div class="news-item-content">
          I started my master's studies at
          <span class="highlight-black">ZJUIDG</span>,
          <span class="highlight-black">Zhejiang University</span>.
        </div>
      </div>
      <div class="news-item">
        <div class="news-item-time">2024.06</div>
        <div class="news-item-content">
          I obtained my bachelor's degree in Computer Science from
          <span class="highlight-black">Ocean University of China</span>.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NewsComponent",
});
</script>

<style scoped>
.news-container {
  width: 71%;
  margin: 0 auto;
  text-align: left;
  padding-top: 2vh;
}

.news-title {
  font-family: "Abhaya Libre SemiBold";
  font-size: 3vh;
  font-weight: 550;
  margin-bottom: 2vh;
}

.news-content {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.news-item {
  display: flex;
  align-items: flex-start;
  gap: 2vw;
}

.news-item-time {
  font-family: "Abhaya Libre SemiBold";
  font-size: 2.1vh;
  font-weight: 500;
  color: #000000;
  white-space: nowrap;
}

.news-item-content {
  font-family: "NotoSerifSC";
  font-size: 1.8vh;
  padding-bottom: 0.3vh;
  color: #000000;
}

.highlight-black {
  color: #000000;
  font-weight: 800;
}
</style>
