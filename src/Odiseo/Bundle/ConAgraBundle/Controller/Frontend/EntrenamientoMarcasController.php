<?php

namespace Odiseo\Bundle\ConAgraBundle\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class EntrenamientoMarcasController extends Controller
{
    public function showPageAction($page)
    {
        return $this->render('OdiseoConAgraBundle:Frontend/EntrenamientoMarcas:'.$page.'.html.twig');
    }
}
