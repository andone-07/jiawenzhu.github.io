<template>
  <div class="container">
    <div class="left-section">
      <div class="name">Jiawen Zhu</div>
    </div>
    <div class="right-section">
      <div class="breadcrumb">
        <a
          :class="{ active: activeSection === 'about' }"
          href="#about"
          @click="setActiveSection('about')"
          >About</a
        >
        <a
          :class="{ active: activeSection === 'news' }"
          href="#news"
          @click="setActiveSection('news')"
          >News</a
        >
        <a
          :class="{ active: activeSection === 'publication' }"
          href="#publication"
          @click="setActiveSection('publication')"
          >Publication</a
        >
      </div>
      <div class="actions">
        <button class="btn-theme">
          <img
            src="../assets/icons/dark.svg"
            class="theme-icon"
            alt="Dark mode"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "PageHead",
  setup() {
    const activeSection = ref("about");
    let isManualClick = false;

    const setActiveSection = (section: string) => {
      activeSection.value = section;
      isManualClick = true;
      // 300ms 后重置标志，允许滚动监听继续工作
      setTimeout(() => {
        isManualClick = false;
      }, 300);
    };

    const checkScroll = () => {
      if (isManualClick) return; // 如果是手动点击，跳过滚动检测

      const sections = ["about", "news", "publication"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 考虑到固定导航栏的高度(6.1vh)，调整判断位置
          if (
            rect.top <= window.innerHeight * 0.061 + 10 &&
            rect.bottom >= window.innerHeight * 0.061
          ) {
            activeSection.value = section;
            break;
          }
        }
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", checkScroll);
      // 初始检查
      checkScroll();
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", checkScroll);
    });

    return {
      activeSection,
      setActiveSection,
    };
  },
});
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  padding: 0 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7fbff;
}

.left-section {
  font-size: 3vh;
  font-weight: 550;
  font-family: "Carattere";
  padding-top: 0.5vh;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 1.5vw;
}

.breadcrumb {
  font-family: "Inter";
  display: flex;
  gap: 1vw;
  font-size: 2.1vh;
}

.breadcrumb a {
  text-decoration: none;
  color: #d9d9d9;
  position: relative;
  transition: all 0.3s;
  font-weight: 300;
}

.breadcrumb a.active {
  color: #000000;
  font-weight: 500;
}

.breadcrumb a:not(:last-child):after {
  content: " / ";
  right: -0.75vw;
  position: absolute;
  color: #d9d9d9;
}

.actions {
  display: flex;
  gap: 10px;
}

.btn-theme {
  background-color: transparent;
  cursor: pointer;
  border: none;
  transition: all 0.3s;
}

.btn-lang:hover,
.btn-theme:hover {
  background-color: #e9f0f8;
}

.theme-icon {
  width: 2.2vh;
  height: 2.2vh;
  cursor: pointer;
}
</style>
