<?php

namespace Odiseo\Bundle\ConAgraBundle\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class EntrenamientoMarcasController extends Controller
{
	public function indexAction()
	{
		return $this->render('OdiseoConAgraBundle:Frontend/EntrenamientoMarcas:index.html.twig');
	}
	
    public function showPageAction($page)
    {
        return $this->render('OdiseoConAgraBundle:Frontend/EntrenamientoMarcas:'.$page.'.html.twig');
    }
}
