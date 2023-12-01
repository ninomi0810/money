<script>
export default {
    data() {
        return {
            input1: "",
            input2: "",
            input3: "",
        }
    },
    computed: {
    },
    methods: {
        storage() {
            const input1 = document.getElementById("input1").value;
            const input2 = document.getElementById("input2").value;
            const input3 = document.getElementById("input3").value;
            const input = [input1, input2];

            // 從本機儲存檢索現有inputs的值
            let storedData = localStorage.getItem("inputs");

            // console.log(storedData);

            if (storedData == null) {
                storedData = [];
                storedData.push(input)
                localStorage.setItem("inputs", JSON.stringify(storedData));
                console.log(storedData)
            } else {
                storedData = JSON.parse(storedData);
                console.log(storedData);
                storedData.forEach(element => {
                    console.log(element)
                    console.log(input1)
                    console.log(input2)
                    if (input1 !== element[0]) {
                        if (input2 !== element[1]) {
                            storedData.push(input);
                            localStorage.setItem("inputs", JSON.stringify(storedData));
                        }
                    }
                });
            }
        }
    },
    mounted() {
    }
}
</script>


<template>
    <div class="template">
        <div class="all">
            <h1>Sign Up</h1>
            <label for="">Account</label>
            <input type="text" placeholder="input text" v-model="input1" id="input1">
            <label for="">Password</label>
            <input type="text" placeholder="input text" v-model="input2" id="input2">
            <label for="">Repeat Password</label>
            <input type="text" placeholder="input text" v-model="input3" id="input3">
            <div class="btn">
                <button type="button" class="btn1"><a href="/Signup">Cancel</a></button>
                <button type="button" class="btn2" @click="storage()">Sign Up</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.template{
    width: 100vw;
    height: 97vh;
    background-color: rgb(84, 130, 171);
    margin: 0;
}
.all {
    background-color: rgb(84, 130, 171);
    width: 30vw;
    height: 80vh;
    margin-left: 35%;
    // margin-top: 10%;

    h1 {
        margin-left: 30%;
        width: 100%;
        height: 15%;
        color: #fff;
    }

    label {
        width: 100%;
        height: 10%;
        color: #fff;
        font-size: 20px;
        // margin-bottom: 30px;
    }

    input {
        width: 100%;
        height: 7%;
        font-size: 20px;
        padding-left: 10px;
        color: black;
        margin-bottom: 7%;
        margin-top: 2%;
        border: 1px solid #fff;

        border-radius: 10px;
    }

    .btn {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: space-around;
        margin-top: 10%;

        button {
            width: 30%;
            height: 30%;
            border: none;
            border-radius: 10px;
            color: white;
            font-size: 15px;
        }

        .btn1 {
            background-color: rgb(135, 158, 176);
            a{
                color: white;
                text-decoration: none;
            }
        }

        .btn2 {
            color:rgb(84, 130, 171) ;
            background-color: white;

        }
    }
}
</style>