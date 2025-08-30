<template>
    <div>
        <div class="">
            <div class="container mx-auto bg-white pt-32">
            <div class="px-4">
                <NuxtLink to="/compliance/" class="flex justify-center gap-4 p-2 border rounded border-primary text-gray-800 text-center w-1/2 md:w-1/5 cursor-pointer">
                    <i class="material-icons">arrow_back</i>
                    {{ msgTranslate.legal || 'Legal' }}
                </NuxtLink>
                
                <!-- Loading State -->
                <div v-if="loading" class="text-center py-10">
                    <p class="text-gray-600">Loading content...</p>
                </div>
                
                <!-- Error State -->
                <div v-else-if="error" class="text-center py-10">
                    <p class="text-red-600">Error loading content. Please try again later.</p>
                </div>
                
                <!-- Content -->
                <div v-else class="">
                    <div class="text-black" v-html="htmlContent"></div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { msgTranslate, globalContent, loadLang, fetchCachedContent } from '~/composables/globalData';

const route = useRoute();
const slug = route.params.slug;

const htmlContent = ref('');
const loading = ref(true);
const error = ref(null);

// Use new fetchCachedContent function with KV caching
async function loadContent(contentCode) {
    try {
        loading.value = true;
        console.log('📄 COMPLIANCE: Loading content for', contentCode);
        
        // Use the optimized fetchCachedContent function
        const content = await fetchCachedContent(contentCode);
        htmlContent.value = content;
        
        console.log('✅ COMPLIANCE: Content loaded successfully');
    } catch (err) {
        console.error('❌ COMPLIANCE: Error loading content:', err);
        error.value = err;
        htmlContent.value = '<p>Error loading content. Please try again later.</p>';
    } finally {
        loading.value = false;
    }
}

// Load content on component mount
onMounted(async () => {
    try {
        await loadLang(); // Ensure language is loaded first
        await loadContent(slug);
    } catch (err) {
        console.error('❌ COMPLIANCE: Error in component setup:', err);
        error.value = err;
        loading.value = false;
    }
});

const handleClick = async (key) => {
    const code = globalContent[key];
    await loadContent(code);
};
</script>

<style scoped>
.content-area h1 {
    font-weight: bold !important;
}
</style>
