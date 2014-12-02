<?php

namespace Odiseo\Bundle\ConAgraBundle\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class IntroController extends Controller
{
	
	private $MAP_COUNTRIES_DISTRIBUTORS =	array( 
										 'Colombia' => array ('Fedco SA','Congrupo','Star Brands International','Bebida Logistica','De la Sabana','Distribuidora Elite') ,
										 'Venezuela' => array('Alfonzo Rivas', 'Importaciones MR') , 
										 'Ecuador' => array('Quifatex', 'El Rosado', 'WRT') ,
										 'Peru'  => array('Trijet', 'KMC Internacional', 'Peruana de Abastecimientos','Peruana de Abastecimientos') ,
										 'Bolivia'  => array('Aidisa'),
										 'Costa Rica'  => array('Agencias Feduro', 'Ciamesa','Corporacion de Supermercados'),
										 'Honduras'  => array('Distribuidora Solis (DISOL)', ' Supermercados Junior', 'Hortifruti Honduras', 'Operadora del Oriente'),
										 'Nicaragua'  => array('Contesa', 'Hortifruti Nicaragua S A' ),
										 'Panama'  => array('Agencias Feduro', 'Felipe Mota'),
										 'Belize'  => array('L&E International', 'James Brodies', 'Reimers Feed Mill'),
										 'El Salvador'  => array('Distribuidora Europea','Operadora del Sur', 'Dizac SA de CV' ),
										 'Guatemala'  => array('Operadora de Tiendas','Desarrolladora Internacional DCI S ', 'Ninoshka S.A' ),
										 'Estados Unidos'  => array('Promo International' , 'Highland Marketing Inc.',  'Meel Corp'),
										 'Argentina'  => array('Promtex'),
										  'Chile'  => array('Hermanos Velarde','Anson Trading', 'Hipermercados Tottus', 'Walmart Chile'),
										  'Brazil'  => array('Spectrus','Companhia Brasileira', 'Carrefour Brazil', 'Cargill', 'Verdemar',' Walmart Brazil'),
										  'Suriname'  => array('Guimar N V','Tumac', 'Carrefour Brazil', 'Cargill', 'Verdemar',' Walmart Brazil'),
										  'Guyana'  => array('Toucan Industries'),
										  'Uruguay'  => array('Isonel'),
										  'Paraguay'  => array('Galerias Guarani'),
										);
	public function indexAction()
    {
        return $this->render('OdiseoConAgraBundle:Frontend/Intro:index.html.twig');
    }
    
    public function registerAction()
    {
    	return $this->render('OdiseoConAgraBundle:Frontend/Intro:register.html.twig');
    }
    
    public function loginAction()
    {
    	
    	return $this->render('OdiseoConAgraBundle:Frontend/Intro:login.html.twig');
    }
    
    
    public function retriveDistributorsForCountryAction(Request $request)
    {
    	$country = $request->query->get('country');
		$distributors =	$this->MAP_COUNTRIES_DISTRIBUTORS[$country];
    	return  new JsonResponse( array( 'distributors' => $distributors));
    	
    }
    
}
