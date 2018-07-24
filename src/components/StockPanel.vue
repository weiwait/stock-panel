<template>
    <div>
        <button v-on:click="test">test</button>
        <button v-on:click="test2">test2</button>
        <div class="panel bought" v-on:click="boughtMenu(item.code, item.id)" v-for="(item, index) in bought">
            <div class="pre pb">
                <p>{{index}} 今开: {{stock2[index][1]}}</p>
                <p>日期: {{item.buy_time}}</p>
                <p>{{stock2[index][0]}} {{item.code}}</p>
                <p>预估: {{item.predicted_profit}}</p>
                <p>预低价: {{parseFloat(item.min_predicted_price).toFixed(2)}}</p>
                <p>预高价: {{parseFloat(item.max_predicted_price).toFixed(2)}}</p>
                <p>昨开: {{parseFloat(item.yesterday_opening_price).toFixed(2)}}</p>
                <p>昨低价: {{parseFloat(item.yesterday_minimum_price).toFixed(2)}}</p>
                <p>昨高价: {{parseFloat(item.yesterday_maximum_price).toFixed(2)}}</p>
            </div>
            <div class="current">
                <p class="current-price">{{stock2[index][3]}}</p>
                <p class="min">最低: {{parseFloat(stock2[index][5]).toFixed(2)}}</p>
                <p class="max">最高: {{parseFloat(stock2[index][4]).toFixed(2)}}</p>
                <div class="purchase">
                    <p>买① {{Math.round(stock2[index][10] / 100)}}--{{parseFloat(stock2[index][11]).toFixed(2)}}</p>
                    <p>买② {{Math.round(stock2[index][12] / 100)}}--{{parseFloat(stock2[index][13]).toFixed(2)}}</p>
                    <p>买③ {{Math.round(stock2[index][14] / 100)}}--{{parseFloat(stock2[index][15]).toFixed(2)}}</p>
                    <p>买④ {{Math.round(stock2[index][16] / 100)}}--{{parseFloat(stock2[index][17]).toFixed(2)}}</p>
                    <p>买⑤ {{Math.round(stock2[index][18] / 100)}}--{{parseFloat(stock2[index][19]).toFixed(2)}}</p>
                </div>
                <div class="sell">
                    <p>卖① {{Math.round(stock2[index][20] / 100)}}--{{parseFloat(stock2[index][21]).toFixed(2)}}</p>
                    <p>卖② {{Math.round(stock2[index][22] / 100)}}--{{parseFloat(stock2[index][23]).toFixed(2)}}</p>
                    <p>卖③ {{Math.round(stock2[index][24] / 100)}}--{{parseFloat(stock2[index][25]).toFixed(2)}}</p>
                    <p>卖④ {{Math.round(stock2[index][26] / 100)}}--{{parseFloat(stock2[index][27]).toFixed(2)}}</p>
                    <p>卖⑤ {{Math.round(stock2[index][28] / 100)}}--{{parseFloat(stock2[index][29]).toFixed(2)}}</p>
                </div>
            </div>
        </div>
        <div class="panel" v-on:click="preMenu(item.code, item.id)"  v-for="(item, index) in pre">
            <div class="pre">
                <p>{{index}} 今开: {{stock[index][1]}}</p>
                <p>日期: {{item.date}}</p>
                <p>{{stock[index][0]}} {{item.prefix_code}}</p>
                <p>预估: {{item.profit}}</p>
                <p>预低价: {{parseFloat(item.predicted_value).toFixed(2)}}</p>
                <p>预高价: {{parseFloat(item.max_predicted_value).toFixed(2)}}</p>
                <p>昨开: {{parseFloat(item.yesterday_opening_price).toFixed(2)}}</p>
                <p>昨低价: {{parseFloat(item.yesterday_minimum_price).toFixed(2)}}</p>
                <p>昨高价: {{parseFloat(item.yesterday_maximum_price).toFixed(2)}}</p>
                <p>昨收价: {{parseFloat(item.yesterday_closing_price).toFixed(2)}}</p>
            </div>
            <div class="current">
                <p class="current-price">{{stock[index][3]}}</p>
                <p class="min">最低: {{parseFloat(stock[index][5]).toFixed(2)}}</p>
                <p class="max">最高: {{parseFloat(stock[index][4]).toFixed(2)}}</p>
                <div class="purchase">
                    <p>买① {{Math.round(stock[index][10] / 100)}}<span>{{parseFloat(stock[index][11]).toFixed(2)}}</span></p>
                    <p>买② {{Math.round(stock[index][12] / 100)}}<span>{{parseFloat(stock[index][13]).toFixed(2)}}</span></p>
                    <p>买③ {{Math.round(stock[index][14] / 100)}}<span>{{parseFloat(stock[index][15]).toFixed(2)}}</span></p>
                    <p>买④ {{Math.round(stock[index][16] / 100)}}<span>{{parseFloat(stock[index][17]).toFixed(2)}}</span></p>
                    <p>买⑤ {{Math.round(stock[index][18] / 100)}}<span>{{parseFloat(stock[index][19]).toFixed(2)}}</span></p>
                </div>
                <div class="sell">
                    <p>卖① {{Math.round(stock[index][20] / 100)}}<span>{{parseFloat(stock[index][21]).toFixed(2)}}</span></p>
                    <p>卖② {{Math.round(stock[index][22] / 100)}}<span>{{parseFloat(stock[index][23]).toFixed(2)}}</span></p>
                    <p>卖③ {{Math.round(stock[index][24] / 100)}}<span>{{parseFloat(stock[index][25]).toFixed(2)}}</span></p>
                    <p>卖④ {{Math.round(stock[index][26] / 100)}}<span>{{parseFloat(stock[index][27]).toFixed(2)}}</span></p>
                    <p>卖⑤ {{Math.round(stock[index][28] / 100)}}<span>{{parseFloat(stock[index][29]).toFixed(2)}}</span></p>
                </div>
            </div>
        </div>
        <audio preload="metadata" id="audio">
            <source src="../assets/dd2.mp3">
        </audio>
        <button v-on:click="audio">audio</button>
        <ul id="content-menu" ref="contentMenu">
            <li v-on:click="complete">完成交易</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
        </ul>
        <ul id="pre-menu" ref="preMenu">
            <li v-on:click="deletePreItem">删除</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
        </ul>
        <div id="sb">
            <ul>
                <li v-for="item in sb">{{item}}</li>
            </ul>
        </div>
        <div id="complete" ref="completed">
            <div id="complete-title">
                <span v-on:click="closeComplete">X</span>
            </div>
            <input v-model="completeData.id" placeholder="id">
            <button v-on:click="submitComplete">submit</button>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                pre: [],
                stock: [],
                test3: [[1]],
                bought: [],
                stock2: [],
                sb: [],
                menuCode: '',
                completeData: {
                    id: '',
                },
                preData: {
                    id: ''
                }
            }
        },
        created: function () {
            this.$http.get('http://localhost:8888/preorder.php').then(success => {
                // console.log(success.data);
                this.pre = success.data;
                this.pre.forEach((v, i) => {
                    this.stock[i] = [v.opening_price];
                });
            }, error => {
                console.log(error)
            });
            this.$http.get('http://localhost:8888/bought.php').then(success => {
                // console.log(success.data);
                this.bought = success.data;
                this.bought.forEach((v, i) => {
                    this.stock2[i] = [v.opening_price];
                });
            }, error => {
                console.log(error)
            });
            // document.oncontextmenu = (event) => {
                // event = event || window.event;
                // console.log(event);
                // this.$refs.contentMenu.style.display = 'block';
                // this.$refs.contentMenu.style.left = event.clientX + 'px';
                // this.$refs.contentMenu.style.top = event.clientY + 'px';
            //     this.$emit('abc');
            //     return false;
            // }
        },
        methods: {
            test: function () {
                this.pre.forEach((v, i) => {
                    this.$http.get(`/sina/list=${v.prefix_code}`).then(success => {
                        let data = success.data.split('"');
                        data = data[1].split(',');
                        this.$set(this.stock, i, data);
                    });
                });
                this.bought.forEach((v, i) => {
                    this.$http.get(`/sina/list=sz${v.code}`).then(success => {
                        let data = success.data.split('"');
                        data = data[1].split(',');
                        this.$set(this.stock2, i, data);
                    });
                });
            },
            test2: function () {
                setInterval(() => {
                    this.test();
                    this.watchStock();
                }, 1500)
            },
            audio: function () {
                document.querySelector('#audio').volume = 1;
                document.querySelector('#audio').play();
            },
            watchStock: function () {
                let tmp = [];
                this.stock.forEach((v, i) => {
                //     if (parseFloat(v[3]) < this.pre[i]['predicted_value']) {
                //         this.audio();
                //         tmp.push(i);
                //     }
                    if ((parseFloat(v[3]) - parseFloat(v[5])) < 0.03) {
                        // this.audio();
                        tmp.push(i);
                    }
                    this.sb = tmp;
                })
            },
            boughtMenu: function (code, id) {
                let event = window.event;
                this.menuCode = code;
                this.completeData.id = id;
                let dis = 'block';
                if ('block' === this.$refs.contentMenu.style.display) {
                    dis = 'none';
                }
                this.$refs.contentMenu.style.display = dis;
                this.$refs.contentMenu.style.left = event.clientX + 'px';
                this.$refs.contentMenu.style.top = event.clientY + 'px';
                // return false;
            },
            preMenu: function (code, id) {
                let event = window.event;
                this.menuCode = code;
                this.preData.id = id;
                let dis = 'block';
                if ('block' === this.$refs.preMenu.style.display) {
                    dis = 'none';
                }
                this.$refs.preMenu.style.display = dis;
                this.$refs.preMenu.style.left = event.clientX + 'px';
                this.$refs.preMenu.style.top = event.clientY + 'px';
                // return false;
            },
            complete: function () {
                this.$refs.contentMenu.style.display = 'none';
                this.$refs.completed.style.display = 'block';
            },
            closeComplete: function () {
                this.$refs.completed.style.display = 'none';
            },
            submitComplete: function () {
                let params = new URLSearchParams();
                params.append('id', this.completeData.id);
                params.append('method', 'complete');
                this.$http.post('http://localhost:8888/stockPanel.php', params).then(success => {
                    console.log(success.data);
                }, error => {
                    console.log(error);
                })
            },
            deletePreItem: function () {
                let params = new URLSearchParams();
                params.append('id', this.preData.id);
                params.append('method', 'deletePreItem');
                this.$http.post('http://localhost:8888/stockPanel.php', params).then(success => {
                    console.log(success.data);
                }, error => {
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .panel {
        width: 426px;
        height: 300px;
        border: 1px solid green;
        float: left;
        margin: 20px;
    }
    .bought {
        border: 1px solid red;
    }
    .pre {
        width: 150px;
        height: 300px;
        border-right: 1px solid green;
        float: left;
    }
    .pb {
        border-right: 1px solid red;
    }
    .pre p {
        line-height: 30px;
        text-indent: 0.4em;
    }
    .current {
        width: 275px;
        height: 300px;
        float: right;
    }
    .current-price {
        line-height: 60px;
        text-align: center;
        color: red;
        font-size: 30px;
    }
    .min {
        width: 125px;
        float: left;
        text-align: center;
    }
    .max {
        width: 125px;
        float: right;
        text-align: center;
    }
    .purchase {
        width: 125px;
        float: left;
        text-indent: 0.5em;
        line-height: 30px;
        margin: 30px 0 0 0;
        text-align: left;
        color: black;
    }
    .purchase span {
        float: right;
    }
    .sell {
        width: 125px;
        float: right;
        line-height: 30px;
        margin: 30px 0 0 0;
        text-align: left;
        color: black;
    }
    .sell span {
        float: right;
        margin: 0 10px 0 0;
    }
    #content-menu {
        display: none;
        position: absolute;
        z-index: 99;
        width: 200px;
        background: #6efff0;
        list-style: none;
        border: 1px solid #65c4ff;
        box-shadow: 3px 3px 3px #6590ff;
    }
    #content-menu li {
        line-height: 40px;
        cursor: pointer;
        font-size: 26px;
    }
    #content-menu li:hover {
        background: rgba(148, 165, 165, 0.65);
    }
    #pre-menu {
        display: none;
        position: absolute;
        z-index: 99;
        width: 200px;
        background: #6efff0;
        list-style: none;
        border: 1px solid #65c4ff;
        box-shadow: 3px 3px 3px #6590ff;
    }
    #pre-menu li {
        line-height: 40px;
        cursor: pointer;
        font-size: 26px;
    }
    #pre-menu li:hover {
        background: rgba(148, 165, 165, 0.65);
    }
    #sb {
        position: fixed;
        top: 0;
        right: 0;
        width: 90px;
        background: #a57e3c;
        font-size: 30px;
        text-align: center;
    }
    #complete {
        width: 500px;
        height: 400px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background: azure;
        position: fixed;
        top: 50%;
        left: 50%;
        margin: -200px 0 0 -250px;
        display: none;
    }
    #complete-title {
        height: 40px;
        background: aquamarine;
        border-radius: 10px 10px 0 0;
        margin: 1px 0 0 0;
    }
    #complete-title span {
        font-size: 26px;
        line-height: 40px;
        text-align: center;
        width: 40px;
        float: right;
        margin: 0 10px 0 0;
        cursor: pointer;
    }
</style>
