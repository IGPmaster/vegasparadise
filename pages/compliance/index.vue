<template>
    <div>
        <div class="bg-white py-10">
            <div class="container mx-auto px-0">
                <div class="g-btn-wrapper mt-10 md:mt-20 flex flex-wrap justify-center">
                    <button v-for="(value, key) in globalContent" :key="key" @click="handleClick(key)"
                        class="h-10 px-4 md:px-8 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 uppercase text-xs md:text-base">
                        {{ msgTranslate[value] ? msgTranslate[value] : value }}
                    </button>
                </div>

                <div class="px-4">
                    <!-- Loading State -->
                    <div v-if="loading" class="text-center py-10">
                        <p class="text-gray-600">Loading content...</p>
                    </div>
                    
                    <!-- Error State -->
                    <div v-else-if="error" class="text-center py-10">
                        <p class="text-red-600">Error loading content. Please try again later.</p>
                    </div>
                    
                    <!-- Content -->
                    <div v-else class="compliance text-black" v-html="htmlContent"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { msgTranslate, globalContent, loadLang, fetchCachedContent } from '~/composables/globalData';

const htmlContent = ref('');
const loading = ref(true);
const error = ref(null);
const activeSection = ref('aboutus');

// Use new fetchCachedContent function with KV caching
async function loadContent(contentCode) {
    try {
        loading.value = true;
        console.log('📄 COMPLIANCE INDEX: Loading content for', contentCode);
        
        // Use the optimized fetchCachedContent function
        const content = await fetchCachedContent(contentCode);
        htmlContent.value = content;
        activeSection.value = contentCode;
        
        console.log('✅ COMPLIANCE INDEX: Content loaded successfully');
    } catch (err) {
        console.error('❌ COMPLIANCE INDEX: Error loading content:', err);
        error.value = err;
        htmlContent.value = '<p>Error loading content. Please try again later.</p>';
    } finally {
        loading.value = false;
    }
}

// Load initial content on component mount
onMounted(async () => {
    try {
        await loadLang(); // Ensure language is loaded first
        await loadContent('aboutus'); // Load default content
    } catch (err) {
        console.error('❌ COMPLIANCE INDEX: Error in component setup:', err);
        error.value = err;
        loading.value = false;
    }
});

const handleClick = async (key) => {
    const code = globalContent.value[key]; // Access .value since globalContent is a ref
    console.log('📄 COMPLIANCE INDEX: Button clicked for key:', key, 'code:', code);
    if (code) {
        await loadContent(code);
    } else {
        console.error('❌ COMPLIANCE INDEX: No code found for key:', key, 'globalContent:', globalContent.value);
    }
};
</script>

<style scoped>

</style>
