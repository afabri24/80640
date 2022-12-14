package mx.uv.c80640;
import static spark.Spark.*;
import java.util.HashMap;
import java.util.Map;
import com.google.gson.Gson;
/**
 * Hello world!
 *
 */
public class App 
{
    public static Gson gson= new Gson();
    public static Map<String,Usuario> usuarios=new HashMap<>();

    /**
     * @param args
     */
    public static void main( String[] args )
    {
        port(4567);
        //port(80);
        //inicializacion de datos
        Usuario u1= new Usuario("1", "pablo", "1234");
        Usuario u2= new Usuario("2", "ana", "7890");
        usuarios.put(u1.getId(),u1);
        usuarios.put(u2.getId(),u2);

        System.out.println( "Hello World!" );
        before((req,res)->res.type("application/json"));
        get("/usuario" , (req, res) -> gson.toJson(u1));
        get("/usuarios" , (req, res) -> gson.toJson(usuarios));
        
        post("null", (req,res)->{
            String datosFormulario=req.body();
            Usuario u= gson.fromJson(datosFormulario, Usuario.class);
            usuarios.put(u.getId(),u);
            return null;
        });
    }
}
