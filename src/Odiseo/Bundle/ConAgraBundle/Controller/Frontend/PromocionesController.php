<?php

namespace Odiseo\Bundle\ConAgraBundle\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PromocionesController extends Controller
{
    public function showPageAction($page)
    {
        return $this->render('OdiseoConAgraBundle:Frontend/Promociones:'.$page.'.html.twig');
    }
}
