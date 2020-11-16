<template>
  <div id="app">
    <FormSection msg="This a cheap-flight front test"/>
    <SearchSection :results=jsonlist />
  </div>
</template>

<script>
import FormSection from './components/FormSection.vue'
import SearchSection from './components/SearchSection.vue'

export default {
  name: 'App',
  components: {
    FormSection,
    SearchSection
  },
  data: function( ) {
    return {
    jsonlist:[
        {
            "id": "1cb2125b48aa0000952bc06f_0",
            "nightsInDest": null,
            "duration": {
                "departure": 5700,
                "return": 0,
                "total": 5700
            },
            "flyFrom": "BVA",
            "cityFrom": "Paris",
            "cityCodeFrom": "PAR",
            "countryFrom": {
                "code": "FR",
                "name": "France"
            },
            "flyTo": "DUB",
            "cityTo": "Dublin",
            "cityCodeTo": "DUB",
            "countryTo": {
                "code": "IE",
                "name": "Ireland"
            },
            "distance": 729.53,
            "routes": [
                [
                    "BVA",
                    "DUB"
                ]
            ],
            "airlines": [
                "FR"
            ],
            "pnr_count": 1,
            "has_airport_change": false,
            "technical_stops": 0,
            "price": 14,
            "bags_price": {
                "1": 37.5,
                "2": 75.0
            },
            "baglimit": {
                "hand_width": 20,
                "hand_height": 40,
                "hand_length": 55,
                "hand_weight": 10,
                "hold_width": 81,
                "hold_height": 119,
                "hold_length": 119,
                "hold_dimensions_sum": 319,
                "hold_weight": 20
            },
            "availability": {
                "seats": 2
            },
            "facilitated_booking_available": false,
            "conversion": {
                "USD": 14,
                "EUR": 12
            },
            "quality": 36.666605000000004,
            "booking_token": "Bdeld5Ssesl5ul9b9Yq5E4ypNIyxO1fCjDdHpyzJLQQwlQfdJqEe8uBcRluitQ8wPLy49RqXbcqS4_t5psbd6vCGVkLnfNHWDLl3xEIxtDnydH4H4cCE-2ty-DWPO1u4akdmbm19V0n61jXIV1xBMJVrZM5qDQ0NhwPLhjF-8eVWdilvv0lu1mCGNIZOO9-ywo7D-JDtu9qQxe0JNA1-jfHw1MZV7FfiBTNk0zkPtoGOGWZTTM2cUu6RTbDjJtm0u6o8DUQiELM-OxAWDGj5gk92wzlTj-jb1fSyMGca99xcHsxYJaCIDmZxdzXGT3CaJZ6DI7sltTmp5C1Aq85AjZU809hhC1WB6bQd0B0m_KHhTyJCLuZIV2NhkkiZ20KmyC5Zc4rRDktO1d43Ad4jCP3aImOW4oEpg7N6XpQnlTBCYFYSNqWmRRSGOm48PcGiQ9OUn6n0XxADJXsIVA0PYBNbEjvJDYEGXzOC-xjDHRpV3tvR-2uSuGO6SHnG_mLrPyWOSX2qLnE34MVL2Wq05H86MZonmADNXeLY7IjR3-7pVdOePgTRv4OJnzLyuU-bu0l1e7PZ8l3Uj41phAaXP6w==",
            "deep_link": "https://www.kiwi.com/deep?from=BVA&to=DUB&flightsId=1cb2125b48aa0000952bc06f_0&price=12&passengers=1&affilid=fabr9193gtrip&lang=en&currency=USD&booking_token=Bdeld5Ssesl5ul9b9Yq5E4ypNIyxO1fCjDdHpyzJLQQwlQfdJqEe8uBcRluitQ8wPLy49RqXbcqS4_t5psbd6vCGVkLnfNHWDLl3xEIxtDnydH4H4cCE-2ty-DWPO1u4akdmbm19V0n61jXIV1xBMJVrZM5qDQ0NhwPLhjF-8eVWdilvv0lu1mCGNIZOO9-ywo7D-JDtu9qQxe0JNA1-jfHw1MZV7FfiBTNk0zkPtoGOGWZTTM2cUu6RTbDjJtm0u6o8DUQiELM-OxAWDGj5gk92wzlTj-jb1fSyMGca99xcHsxYJaCIDmZxdzXGT3CaJZ6DI7sltTmp5C1Aq85AjZU809hhC1WB6bQd0B0m_KHhTyJCLuZIV2NhkkiZ20KmyC5Zc4rRDktO1d43Ad4jCP3aImOW4oEpg7N6XpQnlTBCYFYSNqWmRRSGOm48PcGiQ9OUn6n0XxADJXsIVA0PYBNbEjvJDYEGXzOC-xjDHRpV3tvR-2uSuGO6SHnG_mLrPyWOSX2qLnE34MVL2Wq05H86MZonmADNXeLY7IjR3-7pVdOePgTRv4OJnzLyuU-bu0l1e7PZ8l3Uj41phAaXP6w==",
            "tracking_pixel": null,
            "transfers": [],
            "type_flights": [
                "deprecated"
            ],
            "virtual_interlining": false,
            "route": [
                {
                    "fare_basis": "",
                    "fare_category": "M",
                    "fare_classes": "",
                    "fare_family": "",
                    "last_seen": "2020-11-16T15:26:12.000Z",
                    "refresh_timestamp": "2020-11-16T15:26:12.000Z",
                    "return": 0,
                    "bags_recheck_required": false,
                    "guarantee": false,
                    "id": "1cb2125b48aa0000952bc06f_0",
                    "combination_id": "1cb2125b48aa0000952bc06f",
                    "cityTo": "Dublin",
                    "cityFrom": "Paris",
                    "cityCodeFrom": "PAR",
                    "cityCodeTo": "DUB",
                    "flyTo": "DUB",
                    "flyFrom": "BVA",
                    "airline": "FR",
                    "operating_carrier": "",
                    "equipment": null,
                    "flight_no": 29,
                    "vehicle_type": "aircraft",
                    "operating_flight_no": "",
                    "local_arrival": "2020-12-06T21:55:00.000Z",
                    "utc_arrival": "2020-12-06T21:55:00.000Z",
                    "local_departure": "2020-12-06T21:20:00.000Z",
                    "utc_departure": "2020-12-06T20:20:00.000Z"
                }
            ],
            "local_arrival": "2020-12-06T21:55:00.000Z",
            "utc_arrival": "2020-12-06T21:55:00.000Z",
            "local_departure": "2020-12-06T21:20:00.000Z",
            "utc_departure": "2020-12-06T20:20:00.000Z"
        },
        {
            "id": "1cb2125b48a30000a38c27e0_0",
            "nightsInDest": null,
            "duration": {
                "departure": 5700,
                "return": 0,
                "total": 5700
            },
            "flyFrom": "BVA",
            "cityFrom": "Paris",
            "cityCodeFrom": "PAR",
            "countryFrom": {
                "code": "FR",
                "name": "France"
            },
            "flyTo": "DUB",
            "cityTo": "Dublin",
            "cityCodeTo": "DUB",
            "countryTo": {
                "code": "IE",
                "name": "Ireland"
            },
            "distance": 729.53,
            "routes": [
                [
                    "BVA",
                    "DUB"
                ]
            ],
            "airlines": [
                "FR"
            ],
            "pnr_count": 1,
            "has_airport_change": false,
            "technical_stops": 0,
            "price": 14,
            "bags_price": {
                "1": 37.5,
                "2": 75.0
            },
            "baglimit": {
                "hand_width": 20,
                "hand_height": 40,
                "hand_length": 55,
                "hand_weight": 10,
                "hold_width": 81,
                "hold_height": 119,
                "hold_length": 119,
                "hold_dimensions_sum": 319,
                "hold_weight": 20
            },
            "availability": {
                "seats": null
            },
            "facilitated_booking_available": false,
            "conversion": {
                "USD": 14,
                "EUR": 12
            },
            "quality": 36.666605000000004,
            "booking_token": "B1OV8XSkon-VgAiCVaFn0DEsz1Z_aYEgSVgBH2E0ZrkktJO02DKWu700VMvk6EyWs5UKX-PX3fIAb8eCHlm3hIMuKLba4BcqemxHw3xit0yB8KiWMhj1mFIrtLicp5rQESH_wuvDU6J4P9Fx2yM06ex323yVSYO4AkOd9prwm84WhlpV35NczC4PTnVLbEAYm_DakOwNwyFjVnciBBRJjPJ8LXOIpw5LW20hZneMyJkgjTg6BbY11Lj249-_ctpxbcpsoKcDdwXXwjckj22wA-U0gVCP9hh70XZP5y_x7wzsPEioAO5bxUHbHcgCYTeRK4DVqnnqoe1MxPcC-a_uqIkSINja138y-jMIdrwzqxt1Ms7bNW79GaLGtCZa2AYr4hQoO9VHfVICEeWLksFSQyHF9LZTUTmfrXBN1V5Hs_xDpaa05mn1YWxbvtEzmzcUpY3tnVNXBG1c92-u7Le1ZNOsSnFAI6DqDqBKmrETyTTGQz_0yS3v2G1ztOss_PQRNvrIqODTnzhgbFNEw0cJw6iGSDp4UO_VI_NJT_NCAIlXPJEF3DgCR1q2ekdNMiss9mGn2qbEVDFIbHOk3prJ09A==",
            "deep_link": "https://www.kiwi.com/deep?from=BVA&to=DUB&flightsId=1cb2125b48a30000a38c27e0_0&price=12&passengers=1&affilid=fabr9193gtrip&lang=en&currency=USD&booking_token=B1OV8XSkon-VgAiCVaFn0DEsz1Z_aYEgSVgBH2E0ZrkktJO02DKWu700VMvk6EyWs5UKX-PX3fIAb8eCHlm3hIMuKLba4BcqemxHw3xit0yB8KiWMhj1mFIrtLicp5rQESH_wuvDU6J4P9Fx2yM06ex323yVSYO4AkOd9prwm84WhlpV35NczC4PTnVLbEAYm_DakOwNwyFjVnciBBRJjPJ8LXOIpw5LW20hZneMyJkgjTg6BbY11Lj249-_ctpxbcpsoKcDdwXXwjckj22wA-U0gVCP9hh70XZP5y_x7wzsPEioAO5bxUHbHcgCYTeRK4DVqnnqoe1MxPcC-a_uqIkSINja138y-jMIdrwzqxt1Ms7bNW79GaLGtCZa2AYr4hQoO9VHfVICEeWLksFSQyHF9LZTUTmfrXBN1V5Hs_xDpaa05mn1YWxbvtEzmzcUpY3tnVNXBG1c92-u7Le1ZNOsSnFAI6DqDqBKmrETyTTGQz_0yS3v2G1ztOss_PQRNvrIqODTnzhgbFNEw0cJw6iGSDp4UO_VI_NJT_NCAIlXPJEF3DgCR1q2ekdNMiss9mGn2qbEVDFIbHOk3prJ09A==",
            "tracking_pixel": null,
            "transfers": [],
            "type_flights": [
                "deprecated"
            ],
            "virtual_interlining": false,
            "route": [
                {
                    "fare_basis": "",
                    "fare_category": "M",
                    "fare_classes": "",
                    "fare_family": "",
                    "last_seen": "2020-11-16T15:05:59.000Z",
                    "refresh_timestamp": "2020-11-16T15:05:59.000Z",
                    "return": 0,
                    "bags_recheck_required": false,
                    "guarantee": false,
                    "id": "1cb2125b48a30000a38c27e0_0",
                    "combination_id": "1cb2125b48a30000a38c27e0",
                    "cityTo": "Dublin",
                    "cityFrom": "Paris",
                    "cityCodeFrom": "PAR",
                    "cityCodeTo": "DUB",
                    "flyTo": "DUB",
                    "flyFrom": "BVA",
                    "airline": "FR",
                    "operating_carrier": "FR",
                    "equipment": null,
                    "flight_no": 29,
                    "vehicle_type": "aircraft",
                    "operating_flight_no": "29",
                    "local_arrival": "2020-11-29T21:55:00.000Z",
                    "utc_arrival": "2020-11-29T21:55:00.000Z",
                    "local_departure": "2020-11-29T21:20:00.000Z",
                    "utc_departure": "2020-11-29T20:20:00.000Z"
                }
            ],
            "local_arrival": "2020-11-29T21:55:00.000Z",
            "utc_arrival": "2020-11-29T21:55:00.000Z",
            "local_departure": "2020-11-29T21:20:00.000Z",
            "utc_departure": "2020-11-29T20:20:00.000Z"
        }
        ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
