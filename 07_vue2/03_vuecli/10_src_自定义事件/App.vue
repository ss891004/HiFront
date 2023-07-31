<template>
  <div>
	<h1>{{msg}}，学生姓名是:{{studentName}}</h1>
  <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
	<!-- A-1. 给Student的组件的实例对象vc 绑定一个事件 -->

  <!-- B-1. 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
  <br>
	<Student @wxyz="getStudentName"  ref="ref_stud"  @xyzb="getStudentName2" />


  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
  },
  data() {
			return {
				msg:'你好啊！',
				studentName:''
			}
		},

  methods:{
	getStudentName(name,...params){
    // A-4. 事件的回调
		console.log('App收到了学生名：',name,params)
		this.studentName = name
	},

	getStudentName2(name,...params){
    // A-4. 事件的回调
		console.log('App收到了学生名：',name,params)
		this.studentName = name
	},

  },


  mounted(){
    // B-4, 事件的回调
    //this.$refs.ref_stud.$on('xyza',this.getStudentName)
    // B-4-1, 只回调一次
    //this.$refs.ref_stud.$once('xyza',this.getStudentName)


    this.$refs.ref_stud.$on('xyza',(name,...params) =>{
      console.log('App收到了学生名XXXXX：',name,params)
		this.studentName = name
    })

  },

};
</script>