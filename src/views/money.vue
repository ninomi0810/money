<script>
export default {
    data() {
        return {
            INCOME: "",
            EXPENSE: "",
            total: this.INCOME + this.EXPENSE,
        }
    },
    computed: {
    },
    methods: {
        async() {
            const { value: formValues } = Swal.fire({
                html: `
                <label for="" style="color:rgb(84, 130, 171);font-size:23px;margin-right:230px;">Text</label>
                <br>
                <input id="swal-input1" class="swal2-input" placeholder="Empty" style="border:1px solid rgb(84, 130, 171);margin-top:10px;margin-bottom:10px">
                <br>
                <label for="" style="color:rgb(84, 130, 171);font-size:23px;margin-right:200px;">Amount</label>
                <br>
                <input id="swal-input2" class="swal2-input" placeholder="Empty" style="border:1px solid rgb(84, 130, 171);margin-top:10px;margin-bottom:10px">
                <br>
                <button type="button" id="btn" class="btn" style="height:40px ;width: 200px;background-color: rgb(84, 130, 171);color: white;border: none;border-radius: 10px;margin-top: 40px;" >Add Transaction</button>`
                ,
                showCloseButton: true,
                showConfirmButton: false,
                focusConfirm: false,
                preConfirm: () => {
                    return [
                        document.getElementById("swal-input1").value,
                        document.getElementById("swal-input2").value
                    ];
                }
            });
            if (formValues) {
                Swal.fire(JSON.stringify(formValues));
            }
        },
        add() {
            console.log("xxx")
            const swalinput1 = document.querySelector("#swal-input1")
            const swalinput2 = document.querySelector("#swal-input2")
            console.log(swalinput1.value)
            const btn = document.querySelector("#btn")
            let costArr = []
            btn.addEventListener("click", () => {
                let costName = swalinput1.value
                let money = parseInt(swalinput2.value)
                let costObj = {
                    itemName: costName,
                    itemMoney: money
                }

                costArr.push(costObj)
                localStorage.setItem("costs", JSON.stringify(costArr))
                let arr = JSON.parse(localStorage.getItem("costs"))

                arr.forEach(element => {
                    show.innerText += `${element.itemName}\n`
                });

            })
        }
    },
    mounted() {
    }
}
</script>


<template>
    <div class="all">
        <div class="left">
            <h1>Expense Tracker</h1>
            <h1 class="Kouhei">Kouhei</h1>
            <h3>Your Blance</h3>
            <h1>{{ this.total }}</h1>
        </div>
        <div class="right">
            <div class="up">
                <div class="income">
                    <h1>INCOME</h1>
                    <h1>{{ this.INCOME }}</h1>
                </div>
                <div class="expense">
                    <h1>EXPENSE</h1>
                    <h1>{{ this.EXPENSE }}</h1>
                </div>
            </div>
            <button type="button" class="btn" @click="async()">Add Transaction</button>
            <div class="all"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.all {
    display: flex;
}

.left {
    width: 30vw;
    height: 100vh;
    background-color: rgb(84, 130, 171);
    color: #fff;

    h1 {
        margin-top: 100px;
        margin-left: 25%;
    }

    .Kouhei {
        margin-left: 40%;
    }

    h3 {
        margin-top: 100px;
        margin-left: 40%;
    }
}

.right {
    width: 70vw;
    height: 100vh;
    background: #fff;

    .up {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 80px;
        margin-bottom: 80px;

        .income {
            color: green;
        }

        .expense {
            color: rgb(173, 10, 10);
        }
    }

    .btn {
        width: 200px;
        height: 40px;
        background-color: rgb(84, 130, 171);
        color: #fff;
        border: none;
        border-radius: 10px;
        margin-left: 40%;
    }
}
</style>