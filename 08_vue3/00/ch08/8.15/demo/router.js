const Home = { template: '<div>Home</div>' }
var Pen = {
        template:`
        <div >
         Good, let's use pen {{ this.$route.params.id }}
        </div>
        `,     
    }
var Pencil = {
    template:`
    <div >
     OK,now use pencil: {{ this.$route.query.brand }}
    </div>
    `,     
}
var Ballpen = {
    template:`
    <div >
    Right,use ballpen: {{ this.$route.params.color}}
    </div>
    `,     
}
var Brush = {
    template:`
    <div >
        use brush: {{ this.$route.params.color}}, {{ this.$route.params.len}}cm
    </div>
    `,     
}
const routes = [
{ path: '/', redirect:{name:'pencil_detail'} }, 
{ path: '/pencil',name:'pencil_detail', component: Pencil },
{ path: '/pen/:id', name:'pen_detail',component: Pen }, 
{ path: '/ballpen/:color',name:'ballpen_detail', component:Ballpen},
{ path: '/brush/:color/:len/',name:'brush_detail', component:Brush},
]
const router = VueRouter.createRouter({
history: VueRouter.createWebHashHistory(),
routes, 
})
