<template>
  <div class="about-container">
    <div class="profile-section">
      <div class="avatar">
        <img src="../assets/photo.jpg" alt="Jiawen Zhu" />
      </div>
      <div class="info">
        <div class="intro">
          <span class="en">Hello!&nbsp;&nbsp;I'm Jiawen Zhu</span>
          <span class="cn">（朱甲文）</span>
          <img src="../assets/icons/zjulogo.svg" alt="ZJU Logo" class="logo" />
        </div>
        <div class="identity">
          <span class="cn"
            >Master's student in Artificial Intelligence @ Zhejiang
            University</span
          >
        </div>
        <div class="direction">
          <span class="cn">Data Visualization </span>
          <img
            src="../assets/icons/visualization.svg"
            alt="Visualization Icon"
            class="icon"
          />
          <span class="cn"> | </span>
          <span class="cn"> Human-Computer Interaction </span>
          <img src="../assets/icons/hci.svg" alt="HCI Icon" class="icon" />
        </div>
        <div class="connect">
          <a href="mailto:jiawenzhu@zju.edu.cn" class="connect-link">
            <img
              src="../assets/icons/email.svg"
              alt="Email Icon"
              class="connect-icon"
            />
          </a>
          <a
            href="https://github.com/andone-07"
            target="_blank"
            rel="noopener noreferrer"
            class="connect-link"
          >
            <img
              src="../assets/icons/github.svg"
              alt="Github Icon"
              class="connect-icon"
            />
          </a>
          <img
            src="../assets/icons/google.svg"
            alt="Google Icon"
            class="connect-icon"
          />
          <img
            src="../assets/icons/TwitterX.svg"
            alt="TwitterX Icon"
            class="connect-icon"
          />
          <a
            href="https://space.bilibili.com/503410002"
            target="_blank"
            rel="noopener noreferrer"
            class="connect-link"
          >
            <img
              src="../assets/icons/bilibili.svg"
              alt="Bilibili Icon"
              class="connect-icon"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AboutComponent",
});
</script>

<style scoped>
.about-container {
  width: 70%;
  margin: 0 auto; /* 保持水平居中 */
  background-color: #deebf7;
  border: 1px solid #d9d9d9;
  border-radius: 0.92vh;
  padding: 1.5vh; /* 可选：添加内边距 */
  text-align: center; /* 可选：如果想让内容也居中 */
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 30px;
  text-align: left;
}

.avatar {
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.intro {
  font-size: 2.8vh;
  margin-bottom: 1vh;
  /* 设置多字体栈，英文使用Yaldevi，中文使用Noto Sans SC */
  font-family: "Yaldevi", "NotoSerifSC";
}

/* 修改英文样式为semibold */
.en {
  font-family: "Yaldevi";
  font-weight: 550; /* semibold字重 */
}

/* 修改中文样式为更小字体且regular */
.cn {
  font-family: "NotoSerifSC";
  font-size: 2.1vh; /* 缩小到英文字体的85% */
  font-weight: 400; /* regular字重 */
}

.direction {
  padding-top: 0.3vh;
}

.icon {
  width: 2.1vh; /* 调整图标大小 */
  height: 2.1vh;
  vertical-align: middle;
  padding-bottom: 0.3vh;
}

.connect-icon {
  width: 2.5vh; /* 调整图标大小 */
  height: 2.5vh;
  vertical-align: middle;
}

.connect {
  padding-top: 0.6vh;
  display: flex; /* 使用flex布局 */
  align-items: center; /* 垂直居中对齐 */
  gap: 0.6vh; /* 设置图标之间的间距 */
}

.logo {
  margin-left: 0.5vw;
  height: 2.5vh;
  vertical-align: middle;
}

.connect-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.connect-link:hover {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}
</style>
