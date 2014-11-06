<?php

namespace Odiseo\Bundle\ConAgraBundle\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PlanogramasController extends Controller
{
    public function indexAction()
    {
        return $this->render('OdiseoConAgraBundle:Frontend/Planogramas:index.html.twig');
    }
    
    public function showPageAction($page)
    {
    	return $this->render('OdiseoConAgraBundle:Frontend/Planogramas:'.$page.'.html.twig');
    }
}
