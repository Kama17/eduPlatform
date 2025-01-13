<script lang="ts">
import { Section, Register } from "flowbite-svelte-blocks";
import { Button, Alert, Label, Input } from "flowbite-svelte";

import { page } from '$app/stores'

let message: string = ''
let colorCode: number = 0

async function activate(event: Event) {

    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const response = await fetch('/api/activation', {
    method: 'POST',
    body: data


});

const result = await response;

form.reset()
message = result.statusText
colorCode = result.status;
}
</script>

    <Section name="register">
      <Register href="/">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form on:submit|preventDefault={activate} class="flex flex-col space-y-6" action="/api/activation">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Create and account</h3>
            <Label class="space-y-2">
              <span>Your email</span>
              <Input type="email" name="email" value={$page.data.email} placeholder="name@company.com" required />
            </Label>
            <Label class="space-y-2">
              <span>Your password</span>
              <Input type="password" name="password" placeholder="•••••" required />
            </Label>
            <Label class="space-y-2">
              <span>Confirm password</span>
              <Input type="password" name="confirm-password" placeholder="•••••" required />
            </Label>
            <Button type="submit" class="w-full1">Create an account</Button>
          </form>
            {#if colorCode === 201}
            <Alert color="green">
              {message}
            </Alert>
            {:else}
            <Alert color="yellow">
              {message}
            </Alert>
            {/if}

        </div>
      </Register>
    </Section>