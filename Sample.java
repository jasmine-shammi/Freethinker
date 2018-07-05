import java.io.*;
import java.lang.*;
import java.util.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Sample extends HttpServlet
{
	public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException 
	{
		PrintWriter out = response.getWriter();
		String s = request.getParameter("accessToken");
		String s1 = s+" "+"received";
		out.write(s1);
	}
}
