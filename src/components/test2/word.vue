<template>
	<div class="file-index">
		<iframe v-if="type== 'word'" :src="previewUrl"
		 width='100%' height='100%' frameborder='1'>
		</iframe>
    <embed v-if="type== 'pdf'" :src="previewUrl" type="application/pdf" width="100%" height="100%"/>
	</div>
</template>

<script>
	export default {
    props:{
      filePath: {
      	type: String,
      	default: ''
      },
      type: {
      	type: String,
      	default: ''
      }
    },
		data() {
			return {
        
			};
		},
    computed:{
      previewUrl() {
      	return "https://view.officeapps.live.com/op/view.aspx?src="+this.filePath
      }
    }
	}
</script>

<style>

</style>
