angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Cards', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var cards = {
            'spade': {//
                2: {
                    title: 'Jump Up',
                    athlete: 'Scott'
                },
                3: {
                    title: 'Monkey Vault',
                    athlete: 'Jo Jo'
                },
                4: {
                    title: "Hand Stand Flat Back"
                },
                5: {
                    title: "Hand Spring"
                },
                6: {
                    title: 'Half on'
                },
                7: {
                    title: 'Handspring Full',
                    athlete: 'Olivia'
                },
                8: {
                    title: 'Tsuk(Tucked)',
                    athlete: 'Sid'
                },
                9: {
                    title: 'Tsuk(Piked)',
                    athlete: 'Baily'
                },
                10: {
                    title: 'Handspring Front',
                    athlete: 'Tyler'
                },
                J: {
                    title: 'Yurch 1/2 on',
                    athlete: 'Chelsie'
                },
                Q: {
                    title: 'Yurch',
                    athlete: 'Haily'
                },
                K: {
                    title: 'Yurch (Layout)',
                    athlete: 'Skibba'
                },
                A: {
                    title: 'Yurch(Full)',
                    athlete: 'Bri'
                }
            },
            'club': {//
                2: {
                    title: 'Pivot Turn',
                    athlete: 'Scott'
                },
                3: {
                    title: 'Squat Turn',
                    athlete: 'Jo Jo'
                },
                4: {
                    title: "Hand Stand"
                },
                5: {
                    title: "Cart Wheel"
                },
                6: {
                    title: 'Back Walk Over'
                },
                7: {
                    title: 'Back Hand Spring',
                    athlete: 'Olivia'
                },
                8: {
                    title: 'Back Tuck'/*,
                     athlete:'Sid'*/
                },
                9: {
                    title: 'Back Layout',
                    athlete: 'Casey'
                },
                10: {
                    title: 'Back Full',
                    athlete: 'That level 10 from camp'
                },
                J: {
                    title: 'BHS-Layout Stepout',
                    athlete: 'Chelsie'
                },
                Q: {
                    title: '(Scratch)',
                    athlete: 'Haily'
                },
                K: {
                    title: 'Standing Full',
                    athlete: 'Skibba'
                },
                A: {
                    title: 'BHS-BHS-Layout',
                    athlete: 'Bri'
                }
            },
            'heart': {//
                2: {
                    title: 'Pullover',
                    athlete: 'Scott'
                },
                3: {
                    title: 'Back Hip Circle',
                    athlete: 'Jo Jo'
                },
                4: {
                    title: "Kip"
                },
                5: {
                    title: "Long-hang Kip"
                },
                6: {
                    title: 'Clear Hip'
                },
                7: {
                    title: 'Giant',
                    athlete: 'Olivia'
                },
                8: {
                    title: '1/2 Pirouette',
                    athlete: 'Sid'
                },
                9: {
                    title: 'Blind',
                    athlete: 'Casey'
                },
                10: {
                    title: 'Blind Front Giant'/*,
                     athlete: 'Tyler'*/
                },
                J: {
                    title: 'Toe Shoot Front',
                    athlete: 'Chelsie'
                },
                Q: {
                    title: 'Pact Salto',
                    athlete: 'Haily'
                },
                K: {
                    title: 'Jaeger',
                    athlete: 'Skibba'
                },
                A: {
                    title: 'Blind Full',
                    athlete: 'Bri'
                }
            },
            'diamond': {//
                2: {
                    title: 'Cart Wheel',
                    athlete: 'Scott'
                },
                3: {
                    title: 'Round Off',
                    athlete: 'Jo Jo'
                },
                4: {
                    title: "Back Hand Spring"
                },
                5: {
                    title: "2x Back Hand Spring"
                },
                6: {
                    title: 'Back Tuck'
                },
                7: {
                    title: 'Back Layout',
                    athlete: 'Olivia'
                },
                8: {
                    title: 'Back Full',
                    athlete: 'Sid'
                },
                9: {
                    title: 'Double Full',
                    athlete: 'Mari'
                },
                10: {
                    title: 'Double Back'/*,
                     athlete: 'Tyler'*/
                },
                J: {
                    title: 'Two and a half',
                    athlete: 'Chelsie'
                },
                Q: {
                    title: 'Two and a half punch front',
                    athlete: 'Haily'
                },
                K: {
                    title: 'Full In',
                    athlete: 'Skibba'
                },
                A: {
                    title: 'Double Pike',
                    athlete: 'Bri'
                }
            }
        }
        var events = {
            'spade': 'vault',
            'club': 'beam',
            'heart': 'bars',
            'diamond': 'floor'
        }


        return {
            shuffle: function () {
                var o = this.all();
                for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                return o;
            },
            all: function () {
                var data = [];
                for (suit in cards) {
                    for(num in cards[suit]){
                        cards[suit][num].suit = suit;
                        cards[suit][num].num = num;
                        data.push(cards[suit][num]);
                    }
                }
                return data;
            },
            cards_by_num:function(){
                var data = {};
                for (num in cards.heart) {
                    if(!data[num]){
                        data[num] = {};
                    }
                    for(suit in cards){

                        cards[suit][num].suit = suit;
                        cards[suit][num].num = num;
                        data[num][suit] = cards[suit][num];
                    }
                }
                return data;
            },
            get: function (suit, num) {
                if(num){
                    // Simple index lookup
                    return cards[suit][num];
                }else{
                    return cards[suit];
                }
            },
            suites: function () {
                return cards;
            }
        }
    });
