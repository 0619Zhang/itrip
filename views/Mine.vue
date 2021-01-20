<template>
    <div class="mineWrap">
        <div class="header">
            <myheader title="个人">
                <div slot="search"></div>
            </myheader>
        </div>
    </div>
</template>

<script>
import myheader from "@/components/head/header";
export default {
  components: {
    myheader: myheader,
  },
};
</script>

<style lang="less" scoped>
.mineWrap {
  width: 100%;
  .header {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #1448ae;
  }
}
</style>