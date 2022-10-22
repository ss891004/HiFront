export default {

    namespaced:true,

	actions:{

        jiaOdd(context, value) {
            console.log('actions中的jiaOdd被调用了')
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            console.log('actions中的jiaWait被调用了')
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        }


    },
	mutations: {
        JIA(state, value) {
            console.log('mutations中的JIA被调用了')
            state.sum += value
        },
        JIAN(state, value) {
            console.log('mutations中的JIAN被调用了')
            state.sum -= value
        },

    },
	state: {
        sum: 0 ,
        school:'hrcb',
        subject:'Java',


    },
	getters:{
        bs(state){
            return state.sum*4-5;
        },
        bs2(state){
            return state.sum*4-10;
        }

    }



}