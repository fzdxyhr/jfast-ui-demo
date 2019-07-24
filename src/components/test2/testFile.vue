<template>
	<div>
		<word type="pdf" :filePath="pdfUrl"></word>
    <!-- <word type="word" :filePath="wordUrl"></word> -->
	</div>
</template>

<script>
  import word from './word.vue'
  
	export default {
    components: {
    	word
    },
		data() {
			return {
				pdfUrl:"D:\\opt\\test\\pdf.pdf",
        wordUrl:"D:\\opt\\test\\word.docx"
			};
		}
	}
</script>

<style>

</style>
