<template>

	<MainBanner />
	<NewGames />

	<!-- Promotions -->
	<div class="py-10 md:py-20 bg-primary_bg">
		<div class="lg:mb-4">
			<div class="container mx-auto px-4 sm:px-6 lg:px-8">
				<div class="bg-tertiary_dark rounded-lg py-6 md:py-10 px-4">
					<div class="grid grid-cols-1 lg:grid-cols-8 lg:gap-8 items-center">
						<div class="col-span-full lg:col-span-6">
							<p class="gamesSectionHead text-primary text-center lg:text-left p-4 text-3xl font-bold">
								{{ msgTranslate?.promotions || 'Promotions' }}
							</p>
							<p class="info_content text-[#bacfdc] font-light text-lg py-5 px-4">
								Fancy a little extra glitz with your play? Head over to the promotions page to
								see the bonuses and offers currently up for grabs at Vegas Paradise — there is
								always something shining on the strip.
							</p>
						</div>
						<div class="lg:col-span-2 p-4">
							<a :href="promotionsLink"
								class="w-full rounded-md py-3 flex items-center justify-center bg-secondary_bg text-secondary uppercase cursor-pointer transition-all ease-in-out duration-500 hover:text-primary hover:bg-primary_bg hover:scale-110">
								<span class="text-center">{{ msgTranslate?.promotions || 'Promotions' }}</span>
								<i class="material-icons pl-2 font-extralight">arrow_forward</i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<PopularGames />
	<SlotGames />
	<CasinoGames />
	<JackpotGames />

	<div class="container mx-auto py-10">
		<div class="px-4">
			<div class="text-sm text-primary">
				<div v-for="promotion in promotionsPosts" :key="promotion.id">
					<div v-html="promotion.content.rendered" :key="promotion.id"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

import { ref, onMounted, defineEmits } from 'vue';
const loading = ref(true);

import { promotionsPosts, promotionsLink, msgTranslate, fetchPromotions, loadLang } from '~/composables/globalData';

const emit = defineEmits(['loaded']);

const { fetch, error, $fetchState } = useFetch(async () => {
	try {
		await useAsyncData('translations', async () => {
			try {
				await loadLang();
			} catch (error) {
				console.error('Error loading translations:', error);
			}
		});
	} catch (error) {
		console.error('Error in index page setup:', error);
	}
});

onMounted(async () => {
	try {
		await fetchPromotions();
		loading.value = false;
	} catch (error) {
		console.error('Error fetching promotions:', error);
	}
	loading.value = false;
	emit('loaded');
});

</script>

<style scoped>
p {
    line-height: 1.7rem;
}

.seoContent {
    color: #f2f4e8;
    background: transparent;
    border-radius: 5px;
}
</style>