<template>
  <div class="publication-container">
    <div class="publication-title">Publications</div>
    <div class="publication-content">
      <div class="publication-item">
        <div class="publication-image">
          <img src="/watchtower.png" alt="Publication thumbnail" />
        </div>
        <div class="publication-info">
          <div class="pub-title">
            Watchtower: Semantic-aware Authoring of Data Validation Rules
          </div>
          <div class="pub-authors">
            Zhongsu Luo, <span class="author-myself">Jiawen Zhu</span>, Xinhuan
            Shu, Shuhan Liu, Xiwen Cai, Ran Chen, Kai Xiong, Jiajun Zhu, Di
            Weng, Yingcai Wu
          </div>
          <div class="pub-venue">
            <span class="venue-tag">VIS'25</span>
            <span class="venue-detail">
              IEEE Transactions on Visualization and Computer Graphics, 2025
            </span>
          </div>
          <div class="pub-links">
            <a href="#" class="link-item"
              >[ <img src="../assets/icons/pdf.svg" class="link-icon" /> Paper
              ]</a
            >
            <a href="#" class="link-item"
              >[ <img src="../assets/icons/video.svg" class="link-icon" /> Video
              ]</a
            >
            <a href="#" class="link-item"
              >[ <img src="../assets/icons/web.svg" class="link-icon" /> Web
              ]</a
            >
            <a href="#" class="link-item"
              >[ <img src="../assets/icons/github.svg" class="link-icon" /> Code
              ]</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "PublicationComponent",
});
</script>

<style scoped>
.publication-container {
  width: 71%;
  margin: 0 auto;
  text-align: left;
  padding-top: 2vh;
}

.publication-title {
  font-family: "Abhaya Libre SemiBold";
  font-size: 3vh;
  font-weight: 550;
  margin-bottom: 2vh;
}

.publication-content {
  display: flex;
  flex-direction: column;
  gap: 2vh;
}

.publication-item {
  display: flex;
  gap: 1vw;
  padding: 1vh 0;
}

.publication-image {
  width: 37.22vh;
  height: 20.92vh;
  background-color: #f5f5f5;
  overflow: hidden;
}

.publication-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.publication-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

.pub-title {
  font-family: "NotoSerifSC";
  font-size: 2.1vh;
  font-weight: 800;
  color: #f16913;
  padding-bottom: 0.5vh;
}

.pub-authors {
  font-family: "Abhaya Libre Regular";
  font-size: 2.1vh;
  color: #000000;
}

.author-myself {
  font-family: "Abhaya Libre SemiBold";
  text-decoration: underline;
}

.pub-venue {
  font-family: "Roboto";
  font-size: 1.8vh;
  color: #666666;
  display: flex;
  align-items: center;
  gap: 0.5vw;
}

.venue-tag {
  border: 2px solid #d9d9d9;
  padding: 0.3vh 0.8vh;
  border-radius: 0.46vh;
  font-family: "Roboto";
  font-size: 1.8vh;
  color: #000000;
}

.venue-detail {
  font-family: "Roboto";
  color: #000000;
  font-style: italic;
}

.pub-links {
  display: flex;
  gap: 1.5vw;
  margin-top: 0.5vh;
}

.link-item {
  font-family: "Roboto";
  font-size: 1.8vh;
  color: #000000;
  text-decoration: none;
}

.link-item:hover {
  text-decoration: underline;
}

.link-icon {
  width: 2vh;
  height: 2vh;
  vertical-align: -0.4vh;
}
</style>
