<?php

namespace Odiseo\Bundle\ConAgraBundle\Controller\Frontend;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ConagraLatamController extends Controller
{
    public function showLatamPageAction()
    {
    	return $this->render('OdiseoConAgraBundle:Frontend/ConagraLatam:conagra-latam.html.twig');
    }
    
    public function showMapAction(Request $request)
    { 
    	$country = $request->query->get('country');
    	return  new JsonResponse($this->renderView('OdiseoConAgraBundle:Frontend/ConagraLatam:'.$country.'.html.twig'));
    }
}
