<template>
    <router-link class="event-link" :to="{ name : 'event-show', params:{ id: event.id } }">
    <dir class="event-card -shadow">
        <span class="eyebrown">@{{ event.times }} on @{{ event.date }}</span>
        <h4 class="title">{{ event.title }}</h4>
        <BaseIcon>
            <span slot="attendee">{{ event.attendees.length }} of Attending</span>
            +66616666666
        </BaseIcon>
        
    </dir>
    </router-link>
</template>

<script>
export default {
    props: {
        event:Object
    }
    /** 
    data: function() {
        return {
            event: {
                id: 1,
                title: 'Beach Cleanup',
                date: 'Sun Apr 14, 2019',
                times: '6:00',
                attendees: [
                    { id: 'A-111', name: 'Aem Wns'},
                    { id: 'A-112', name: 'Khomkrib Wns'}
                ]
            }
        }
    },
    */
}
</script>

<style scoped>
    .event-card {
        padding: 20px;
        margin-bottom: 24px;
        transition: all 0.2s linear;
        cursor: pointer;
    }
    .event-card:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }
    .event-card > .title {
        margin: 0;
    }

    .event-link {
        color: black;
        text-decoration: none;
        font-weight: 100;
    }
</style>
