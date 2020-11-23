var app = new Vue ({
    el:'#root',
    data: {
        albums: [],
    },
    methods: {

    },
    mounted(){
        console.log('hello world');

        axios.get(' https://flynn.boolean.careers/exercises/api/array/music')
            .then((element) => {
                console.log(element);
                console.log(element.data);
                console.log(element.data.response);
                this.albums = element.data.response;
                console.log(this.albums);
            })


    }
})
