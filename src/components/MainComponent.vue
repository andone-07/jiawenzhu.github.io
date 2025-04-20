<template>
  <div class="main-component">
    <div class="head">
      <PageHead />
    </div>
    <div class="content">
      <div id="about" class="about">
        <AboutComponent />
      </div>
      <div class="introduction">
        <IntroductionComponent />
      </div>
      <div id="news" class="news">
        <NewsComponent />
      </div>
      <div id="publication" class="publication">
        <PublicationComponent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHead from "./PageHead.vue";
import AboutComponent from "./AboutComponent.vue";
import IntroductionComponent from "./IntroductionComponent.vue";
import NewsComponent from "./NewsComponent.vue";
import PublicationComponent from "./PublicationComponent.vue";
export default defineComponent({
  name: "MainComponent",
  components: {
    PageHead,
    AboutComponent,
    IntroductionComponent,
    NewsComponent,
    PublicationComponent,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-component {
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-primary);
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
}

.head {
  height: 6.1vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-primary);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6.1vh;
}

.about {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vh 0;
  margin-top: 1vh;
}

.introduction {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2vh;
  border-bottom: 1px solid #d9d9d9;
}

.news {
  width: 100%;
  background-color: #f7fbff;
  padding-bottom: 3vh;
  border-bottom: 1px solid #d9d9d9;
}

.publication {
  width: 100%;
  height: 60vh;
  background-color: #f7fbff;
}
</style>
