<%@page language="java" contentType="text/html" pageEncoding="UTF-8"%>
<%
	String s1=request.getParameter("sort");
	int indexLimit= Integer.parseInt(request.getParameter("indexLimit"));
	int start = Integer.parseInt(request.getParameter("start"));
	System.out.println("start:"+start+"limit:"+indexLimit);
	System.out.println(s1);
	String json1[] = {"{name:'name1'}","{name:'name2'}","{name:'name3'}","{name:'name4'}",
	"{name:'name5'}","{name:'name6'}","{name:'name7'}","{name:'name8'}","{name:'name9'}"};
	 
	StringBuffer sb = new StringBuffer();
	sb.append("[");
	for(int i=start-1;i<start+indexLimit-1&&i<json1.length;i++){	
	System.out.println("i:"+i+" json["+i+"]"+json1[i]);
		sb.append(json1[i]);
		sb.append(",");
	}
	sb.deleteCharAt(sb.length()-1);
	sb.append("]");
	System.out.println(sb.toString());
	//response.getWriter().write(json1.length);
	 response.getWriter().write(sb.toString());

%>