<?php

namespace Odiseo\Bundle\ConAgraBundle\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MainController extends Controller
{
    public function indexAction()
    {
        return $this->render('OdiseoConAgraBundle:Frontend/Main:index.html.twig');
    }
    
    public function registerAction()
    {
    	return $this->render('OdiseoConAgraBundle:Frontend/Main:register.html.twig');
    }
    
    public function loginAction()
    {
    	return $this->render('OdiseoConAgraBundle:Frontend/Main:login.html.twig');
    }
}
