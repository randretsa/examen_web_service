/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package connectivity;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author randretsa
 */
public class Connexion {
        static String user = "postgres";
    static String password = "root";
    static String database = "gestion_flotte_group";
    Connection connect;

    public Connexion(String user,String password,String database) throws ClassNotFoundException,SQLException,InstantiationException,IllegalAccessException
    {
        Class.forName("org.postgresql.Driver").newInstance();
        this.connect = DriverManager.getConnection( "jdbc:postgresql://localhost/"+database,user,password);

    }

    public Connexion() throws ClassNotFoundException,SQLException,InstantiationException,IllegalAccessException
    {
        Class.forName("org.postgresql.Driver").newInstance();
        this.connect = DriverManager.getConnection( "jdbc:postgresql://localhost/"+database,user,password);

    }

    public Connection getConnect()
    {
        return this.connect;
    }
}
