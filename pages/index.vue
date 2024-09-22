<script setup lang="ts">
const route = useRoute()

const servers = [
    {
        name: "CS 1.6 PALESTINE // PUBLIC [FreeVIP 9-12]",
        ipaddr: "185.107.96.220:27015"
    }
];

const rgIps = servers.map(server => server.ipaddr);

const { data } = await useFetch("/api/a2s", {
    method: "POST",
    body: rgIps
});

</script>

<template>
    <div>
        <h1 class="text-center text-5xl font-bold transition-transform duration-300 mt-60 ease-in-out">
            Steamhappy Gaming
        </h1>
        <div class="bg-stone-800 w-2/3 mx-auto mt-4 p-2 rounded-md">
            <h2 class="text-center text-2xl">
                Servers
            </h2>
            <Divider />
            <div class="flex flex-row justify-evenly gap-4">
                <div v-for="srv in servers" class="bg-stone-900 p-2 rounded-md w-full">
                    <div class="flex flex-row">
                        <NuxtImg src="https://image.gametracker.com/images/maps/160x120/cs/de_dust2_2006.jpg" width="160" height="120" class="rounded-md mr-2"></NuxtImg>
                        <div class="flex flex-col">
                            <div>
                                {{ srv.name }}
                            </div>
                            <div>
                                {{ srv.ipaddr }}
                                <NuxtLink :to="'steam://connect/' + srv.ipaddr" class="bg-gradient-to-br from-green-400 to-green-900 hover:to-green-400 py-1 px-2 rounded w-max ml-1">
                                    Join
                                </NuxtLink>
                            </div>
                            <div>
                                {{ data }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
