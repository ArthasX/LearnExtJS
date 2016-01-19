(function() {
	Ext.onReady(function() {
		Ext.regModel("user", {
			fields : [ {
				name : 'name',
				type : 'string'
			}, {
				name : 'age',
				type : 'int'
			} ]
		});

		var userData = [ {
			name : 'liubin',
			age : 1
		}, {
			name : 'jiangxiaoheng',
			age : 26
		} ];

		var memoryProxy = Ext.create('Ext.data.proxy.Memory', {
			data : userData,
			model : 'user'
		});

		memoryProxy.read(new Ext.data.Operation(), function(result) {
			var datas = result.resultSet.records;
			Ext.Array.each(datas, function(model) {
				alert(model.get('name'));
			});
		});
	});
})();

// (function() {
// Ext.onReady(function() {
// Ext.regModel("user", {
// fields : [ {
// name : "name",
// type : "string"
// }, {
// name : "age",
// type : "int"
// } ]
// });
// // 不用create方法，我们直接用proxy来实例化对象。
// var userData = [ {
// name : "LWY",
// age : 31
// }, {
// name : "WR",
// age : 30
// } ];
// // 用Memory的方式创建user的代理类
// var memoryProxy = Ext.create("Ext.data.proxy.Memory", {
// data : userData,
// model : "user"
// });
// // 通过代理就可以建立起模型和数据的关系
// // 这样就可以做CRUD了
// memoryProxy.read(new Ext.data.Operation(), function(result) {
// // alert(result);
// // 得到结果的对象数组
// var datas = result.resultSet.records;
// // 遍历这个数组
// Ext.Array.each(datas, function(model) {
// alert(model.get("name"));
// // alert(model.data.name);
// });
// });
// // update (我怎么感觉像插入？)
// // 先给数据数组中再加入一个对象
// // userData.push({
// // name : "new LWY",
// // age : 32
// // });
// // // 做更新（我发现不做更新也能读出新加的对象，为什么？）
// // // （还有，为什么加了update连下面的read都不执行了？）
// // // （原因可能是我这个ExtJS版本的Operation里没有data，导致不能建立这个数据的records，在ext-all-dev.js里
// // // recs = operation.getRecords(),
// // // len = recs.length;
// // // 时，因为得不到records，
// // // 所以recs.length报错：Cannot read property *length* of null ）
// // memoryProxy.update(new Ext.data.Operation({
// // action : "update",
// // data : userData
// // }), function(result) {
// // }, this);
// // // 再读一遍
// // memoryProxy.read(new Ext.data.Operation(), function(result) {
// // // alert(result);
// // // 得到结果的对象数组
// // var datas = result.resultSet.records;
// // // 遍历这个数组
// // Ext.Array.each(datas, function(model) {
// // alert(model.get("name"));
// // // alert(model.data.name);
// // });
// // });
// });
// })();

//
// (function(){
// Ext.onReady(function(){
// Ext.regModel("user",{
// fields:[
// {name:'name2',type:'string'},
// {anem:'age2',type:'int'}
// ]
// });
// //����create���� ����ֱ����proxy�������������
// var userData = [
// {name2:'uspcat.com',age2:1},
// {name2:'yunfengcheng',age2:26}
// ];
// //����model�Ĵ�����
// var memoryProxy = Ext.create("Ext.data.proxy.Memory",{
// data:userData,
// model:'user'
// })
// //
// // userData.push({name:'new uspcat.com',age:1});
// // //update
// // memoryProxy.update(new Ext.data.Operation({
// // action:'update',
// // data:userData
// // }),function(result){},this);
//		
// //�Ϳ�����CRUD��
// memoryProxy.read(new Ext.data.Operation(),function(result){
// var datas = result.resultSet.records;
// Ext.Array.each(datas,function(model){
// alert(model.get('name'));
// })
// });
// });
// })();
