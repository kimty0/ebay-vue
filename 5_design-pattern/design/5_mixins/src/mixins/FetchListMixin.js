export default {
  data() {
    return {
      items: [],
    }
  },
  created() {
    const url = (this.$route.name === 'user') 
      ? 'https://jsonplaceholder.typicode.com/users/'
      : 'https://jsonplaceholder.typicode.com/todos/';

    fetch(url)
      .then(res => res.json())
      .then(data => this.items = data)
      .catch(error => console.log(error));
  },
}