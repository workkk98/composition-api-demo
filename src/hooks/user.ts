import { reactive, ref, watch } from '@vue/composition-api';

interface Options {
  label: string;
  value: string;
}


export default function userHook () {
  const showUser = ref(localStorage.getItem('user') === 'admin');
  const options: { list: Options[], value: string } = reactive({
    list: [],
    value: ref('')
  });
  async function fetchUserOptions (tag?: string) {
    const localOptions = await new Promise <Options[]>((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            label: 'user1',
            value: 'user1-id'
          },
          {
            label: 'user2',
            value: 'user2-id'
          },
          {
            label: 'user3',
            value: 'user3-id' 
          }
        ]);
      }, 1000);
    })
    options.list = reactive(localOptions);
    // console.log(tag);
  }

  // console.log('options', options);
  watch(() => options.value, () => {
    return fetchUserOptions('watch');
  })

  // setInterval(() => {
  //   showUser.value = !showUser.value;
  // }, 10000);
  if (showUser.value) {
    fetchUserOptions('init');
  }

  
  return {
    showUser,
    options
  }
}