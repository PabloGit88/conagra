<?php

namespace Odiseo\Bundle\ConAngraBundle\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MainController extends Controller
{
    public function indexAction()
    {
        return $this->render('OdiseoConAngraBundle:Frontend/Main:index.html.twig');
    }
}
