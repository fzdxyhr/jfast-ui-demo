import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layout/Layout'
import grade from '@/components/test2/tGrade'
import student from '@/components/test2/tStudent'
import tclass from '@/components/test2/tClass'
import demoClass from '@/components/test2/demoClass'
import demo from '@/components/test2/demo'
import kanban from '@/components/kanban/index'
import softwareIndex from '@/components/kanban/softwareIndex'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'root',
			component: Layout,
			children: [{
					path: '',
					name: 'demo',
					component: student
				},
        {
        		path: 'kanban',
        		name: 'kanban',
        		component: kanban
        	},
				{
					path: 'demoClass',
					name: 'demoClass',
					component: demoClass
				},
			]
		},
		{
			path: '/grade',
			name: 'grade',
			component: grade
		},
		{
			path: '/demoClass2',
			name: 'demoClass2',
			component: demoClass
		},
    {
    	path: '/demo',
    	name: 'demo2',
    	component: demo
    },
		{
			path: '/student',
			name: 'student',
			component: student
		},
		{
			path: '/softwareIndex',
			name: 'softwareIndex',
			component: softwareIndex
		}
	]
})
