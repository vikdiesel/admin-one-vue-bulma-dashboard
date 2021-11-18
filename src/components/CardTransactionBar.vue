<template>
  <card-component class="is-card-transaction-bar" hoverable>
    <level>
      <level type="start">
        <icon-rounded :icon="icon.icon" :type="icon.type" class="is-card-transaction-icon"/>
        <div class="jb-card-transaction-content">
          <h4>${{ amount }}</h4>
          <p><b>{{ date }}</b> via {{ business }}</p>
        </div>
      </level>
      <div class="jb-card-transaction-content-right">
        <p>{{ name }}</p>
        <div><pill type="info" :text="account" small/> <pill :type="icon.type" :text="type" small/></div>
      </div>
    </level>
  </card-component>
</template>

<script>
import { computed } from 'vue'
import { mdiCashMinus, mdiCashPlus, mdiReceipt, mdiCreditCardOutline } from '@mdi/js'
import CardComponent from '@/components/CardComponent'
import Level from '@/components/Level'
import Pill from '@/components/Pill'
import IconRounded from '@/components/IconRounded'

export default {
  name: 'CardProductBar',
  components: { CardComponent, Level, Pill, IconRounded },
  props: {
    amount: Number,
    date: String,
    business: String,
    type: String,
    name: String,
    account: String
  },
  setup (props) {
    const icon = computed(() => {
      if (props.type === 'withdrawal') {
        return {
          icon: mdiCashMinus,
          type: 'danger'
        }
      } else if (props.type === 'deposit') {
        return {
          icon: mdiCashPlus,
          type: 'success'
        }
      } else if (props.type === 'invoice') {
        return {
          icon: mdiReceipt,
          type: 'warning'
        }
      }

      return {
        icon: mdiCreditCardOutline,
        type: 'info'
      }
    })

    return {
      icon
    }
  }
}
</script>
