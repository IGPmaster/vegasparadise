<template>
  <div class="container mx-auto px-4 py-8 bg-primary_bg text-primary pt-24">
    <h1 class="text-3xl font-bold mb-6">Privacy Policy</h1>
    
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Introduction</h2>
      <p class="mb-4">
        This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
        We are committed to ensuring your privacy and protecting any information that might be collected during your visit.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Information We Collect</h2>
      <p class="mb-4">Our website collects minimal information:</p>
      <ul class="list-disc ml-6 mb-4">
        <li>Affiliate referral tracking through a unique identifier</li>
        <li>Anonymous usage statistics (if you consent)</li>
        <li>Essential website functionality data</li>
      </ul>
      <p class="mb-4">
        We do not collect any personal information, require user registration, or handle game transactions directly.
        All gaming activities are conducted through licensed game providers.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Cookie Usage</h2>
      <p class="mb-4">We use the following types of cookies:</p>
      <ul class="list-disc ml-6 mb-4">
        <li>
          <strong>Necessary Cookies:</strong> Essential for website functionality. These cannot be disabled.
        </li>
        <li>
          <strong>Analytics Cookies (Optional):</strong> Help us understand how visitors use our website. These are only set with your consent.
        </li>
        <li>
          <strong>Affiliate Tracking:</strong> A unique identifier stored for 30 days to credit our partners when you visit gaming sites.
          This is essential for our business operations but requires your consent.
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Third-Party Data Sharing</h2>
      <p class="mb-4">
        When you click through to play games, you will be directed to our licensed game providers.
        These providers have their own privacy policies and data collection practices.
        We recommend reviewing their policies before playing.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Your Rights Under GDPR</h2>
      <p class="mb-4">You have the right to:</p>
      <ul class="list-disc ml-6 mb-4">
        <li>Access information about what data we collect</li>
        <li>Withdraw your consent for non-essential cookies at any time</li>
        <li>Request deletion of any stored information</li>
        <li>Object to our use of legitimate interest for affiliate tracking</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
      <p class="mb-4">
        For any privacy-related questions or to exercise your rights, please contact us through our
        <NuxtLink to="/compliance/contact" class="text-secondary hover:text-secondary/90">contact page</NuxtLink>.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Updates to This Policy</h2>
      <p class="mb-4">
        We may update this privacy policy from time to time. Any changes will be posted on this page
        with an updated revision date.
      </p>
      <p class="text-sm text-primary/70">Last updated: {{ new Date().toLocaleDateString() }}</p>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  title: 'Privacy Policy - Dukes Casino',
  meta: [
    {
      name: 'description',
      content: 'Our privacy policy explains how we handle your data and protect your privacy.'
    }
  ]
})
</script> 