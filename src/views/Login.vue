<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
    },
    methods: {
        login(){

        }
    },
    mounted() {
    }
}
</script>

<template>
    <div class="template">
        <div class="all">
            <h1>Expense Tracker</h1>
            <label for="">Account</label>
            <input type="text" placeholder="input text" >
            <label for="">Password</label>
            <input type="text" placeholder="input text" >
            <div class="btn">
                <button type="button" class="btn1">
                    <a href="./Signup">Sign Up</a>
                </button>
                <button type="button" class="btn2" @click="login()">Log In</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.template {
    width: 100vw;
    height: 80vh;
    background-color: #fff;
}

.all {
    width: 30vw;
    height: 80vh;
    margin-left: 35%;
    margin-top: 10%;

    h1 {
        margin-left: 30%;
        width: 100%;
        height: 15%;
        color: rgb(84, 130, 171);
    }

    label {
        width: 100%;
        height: 10%;
        color: black;
        font-size: 20px;
        // margin-bottom: 30px;
    }

    input {
        font-size: 20px;
        padding-left: 10px;
        width: 100%;
        height: 7%;
        color: black;
        margin-bottom: 7%;
        margin-top: 2%;
        border: 1px solid gray;
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
            display: flex;

            a {
                width: 100%;
                height: 100%;
                text-decoration: none;
                color: white;
                padding-top: 7px;
            }
        }

        .btn2 {
            background-color: rgb(84, 130, 171);

        }
    }
}
</style>