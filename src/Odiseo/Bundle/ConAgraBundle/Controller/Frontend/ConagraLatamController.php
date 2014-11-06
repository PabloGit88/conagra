<?php

namespace Odiseo\Bundle\ConAgraBundle\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ConagraLatamController extends Controller
{
    public function showPageAction($page)
    {
        return $this->render('OdiseoConAgraBundle:Frontend/ConagraLatam:'.$page.'.html.twig');
    }
}
