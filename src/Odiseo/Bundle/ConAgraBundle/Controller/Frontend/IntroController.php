<?php

namespace Odiseo\Bundle\ConAgraBundle\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class IntroController extends Controller
{
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
}
