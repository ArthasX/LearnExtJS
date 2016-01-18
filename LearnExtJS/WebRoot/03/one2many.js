(function(){
	Ext.onReady(function(){
		//����ʦ
		Ext.regModel("teacher",{
			fideld:[
				{name:'teacherId',type:"int"},
				{name:'name',type:"auto"}
			],
			hasMany:{
				 model: 'student',
			     name : 'getStudent',
       			 filterProperty: 'teacher_Id'
			}
		});
		//ѧ��
		Ext.regModel("student",{
			fideld:[
				{name:'studentId',type:"int"},
				{name:'name',type:"auto"},
				{name:"teacher_Id",type:'int'}
			]
		});
		//t.students �õ������һ��store��ݼ���a啊
	})
})();