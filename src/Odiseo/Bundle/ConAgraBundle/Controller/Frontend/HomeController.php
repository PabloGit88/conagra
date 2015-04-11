<?php

namespace Odiseo\Bundle\ConAgraBundle\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class HomeController extends Controller
{
	public function welcomeAction(Request $request)
	{
		return $this->render('OdiseoConAgraBundle:Frontend:welcome.html.twig');
	}
	
    public function showHomeAction( )
    {
        return $this->render('OdiseoConAgraBundle:Frontend:home.html.twig');
    }
}
