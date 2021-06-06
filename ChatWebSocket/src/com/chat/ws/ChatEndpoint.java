package com.chat.ws;

import java.io.IOException;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.Iterator;

import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/chat")
public class ChatEndpoint {

	static Set<Session> Users=Collections.synchronizedSet(new HashSet<Session>());
@OnOpen
	
public void onOpen(Session session){
System.out.println("Session"+session.getId()+"connected.");
Users.add(session);	
	}
@OnClose

public void onClose(Session session){

Users.remove(session);
System.out.println("Session"+session.getId()+"removed");
	}


@OnMessage
public void onMessage(String message,Session session) {
	System.out.println("Received message from session:"+session.getId()+":"+message);
	
	Iterator<Session> iter=Users.iterator();
	while (iter.hasNext()){
		try{
			iter.next().getBasicRemote().sendText(message);
		}
		catch(IOException e){e.printStackTrace();
	}
}
}
}